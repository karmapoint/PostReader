class Api::CollectedFeedsController < ApplicationController

  def create
    @collected_feed = CollectedFeed.new(collected_feeds_params)
    if @collected_feed.save
      @feed = @collected_feed.feed
      @collection = @collected_feed.collection
      render :show
    else
      render json: @collected_feed.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @collected_feed = CollectedFeed.find_by(id)
  end

  def destroy
    @collected_feed = CollectedFeed.find_by(collected_feeds_params)
    if @collected_feed.destroy
      @feed = @collected_feed.feed
      @collection = @collected_feed.collection
      render :show
    else
      render json: @collected_feed.errors.full_messages, status: :unprocessable_entity
    end
  end

  def collected_feeds_params
    params.require(:collectedFeed).permit(:collection_id, :feed_id)
  end

end
