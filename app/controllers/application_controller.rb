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

  def get_date(article)
    pub_date = Date.parse(article.published.to_s.slice(0...10))
    publish_date_diff = (Date.current - pub_date).to_s[0].to_i
    if publish_date_diff < 1
      return "- published today"
    elsif publish_date_diff == 1
      return "- published 1 day ago"
    else
      return "- published #{publish_date_diff} days ago"
    end
  end

  def get_image(source)
    suppress(Exception) do
      /<img.+src="([^"]+)"/.match(source)[1]
    end
  end

  def get_summary(article)
    stripped = ActionView::Base.full_sanitizer.sanitize(article.summary)
    stripped.slice(0...255).concat("...")

  end

  def get_content(article)
    if article.content
      full_content = article.content
    else
      full_content = article.summary
    end
  end


  def get_articles(feed_url)
    feed = Feedjira::Feed.fetch_and_parse feed_url
    @articles = {}
    id = 1
    feed.entries.each do |article|
      author = article.author ? article.author : "staff writer"
      summary = article.summary ? get_summary(article) : ""
      pub = get_date(article)
      if article.methods.include?(:image)
        if article.image
          img = article.image
        elsif get_image(article.summary)
          img = get_image(article.summary)
        else
          img = get_image(article.content)
        end
      else
        img = nil
      end

      if article.content
        full_content = article.content
      else
        full_content = article.summary
      end

      post = {
        id: id,
        title: article.title,
        author: author,
        url: article.url,
        published: pub,
        image: img,
        summary: summary,
        content: full_content
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
