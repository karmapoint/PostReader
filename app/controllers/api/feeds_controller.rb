class Api::FeedsController < ApplicationController

  def index
    @feeds = Feed.all
  end

  def create
    if Feed.exists?(feed_url: feed_params["feed_url"])
      @feed = Feed.find_by(feed_url: feed_params["feed_url"])
      render :show
    else
      prep_feed(feed_params["feed_url"])
      if @feed_attributes["feed_url"] == "parse error"
        render :add_content_error, status: :unprocessable_entity
      else
        @feed = Feed.new(@feed_attributes)
        if @feed.save
          render :show
        end
      end
    end
  end

  def show
    @feed = Feed.find(params[:id])
    @collections = Feed.find(params[:id]).collections
  end

  def destroy
    @feed = Feed.find(params[:id])
  end

  private

  def feed_params
    params.permit(:title, :description, :site_url, :feed_url, :favicon_url)
  end

  def prep_feed(feed_url)

    begin
      feed = Feedjira::Feed.fetch_and_parse feed_url
      favicon = "https://www.google.com/s2/favicons?domain_url=".concat(feed.url)
      @feed_attributes = {
        "title"=> feed.title,
         "description"=> feed.title,
         "feed_url"=> feed_url,
         "site_url"=> feed.url,
         "favicon_url"=> favicon
      }
    rescue
      # should add this condition to rescue Feedjira::NoParserAvailable
      @feed_attributes ={
        "feed_url" => "parse error"
      }
    end
  end

end
