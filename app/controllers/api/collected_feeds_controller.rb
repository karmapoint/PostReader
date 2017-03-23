class Api::CollectedFeedsController < ApplicationController

  def create
    @collected_feed = CollectedFeed.new(collected_feed_params)
    @collected_feed.save
    # if @collected_feed.save
    #   render "api/collections/show/#{@collected_feed.collection_id}"
    # end
  end

  def destroy
    @collected_feed = CollectedFeed.find_by(id)
  end

  def collected_feeds_params
    params.permit(:collection_id, :feed_id)
  end

end
