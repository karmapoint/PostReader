class Api::FeedsController < ApplicationController

  def index
    @feeds = Feed.all
  end

  def create
    prep_feed(feed_params["feed_url"])
    @feed = Feed.new(@feed_attributes)
    if @feed.save
      render :show
    else
      render json: @feed.errors.full_messages, status:422
    end
  end

  def show
    @feed = Feed.find(params[:id])
  end

  def destroy
    @feed = Feed.find(params[:id])
  end

  private

  def feed_params
    params.permit(:title, :description, :site_url, :feed_url, :favicon_url)
  end

  def prep_feed(feed_url)
    feed = Feedjira::Feed.fetch_and_parse feed_url
    favicon = "https://www.google.com/s2/favicons?domain_url=".concat(feed.url)
    @feed_attributes = {
      "title"=> feed.title,
       "description"=> feed.title,
       "feed_url"=> feed_url,
       "site_url"=> feed.url,
       "favicon_url"=> favicon
    }
  end

end
