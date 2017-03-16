class Api::FeedsController < ApplicationController

  def index
    @feeds = Feed.all
  end

  def create
    @feed = Feed.new(feed_params)
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
    params.require(:feed).permit(:title, :description, :site_url, :feed_url, :favicon_url)
  end

end
