class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?, :prep_feed, :get_articles

  private


  def prep_feed(feed_url)
    feed = Feedjira::Feed.fetch_and_parse feed_url
    @feedAttributes = {
      "title"=> feed.title,
       "description"=> feed.title,
       "feed_url"=> feed_url,
       "site_url"=> feed.url,
       "favicon_url"=>"https://www.google.com/s2/favicons?domain_url=${feed.url}"
    }
  end

  def get_articles(feed_url)
    feed = Feedjira::Feed.fetch_and_parse feed_url
    @articles = {}
    id = 1
    feed.entries.each do |article|
      author = article.author ? article.author : "staff writer"
      summary = article.summary ? article.summary : ""
      post = {
        id: id,
        title: article.title,
        author: author,
        url: article.url,
        published: article.published,
        image: article.image,
        summary: summary,
        content: article.content
      }
      @articles[id] = post
      id += 1
    end
    @articles
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

end
