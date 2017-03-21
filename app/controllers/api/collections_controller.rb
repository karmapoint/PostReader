class Api::FeedsController < ApplicationController

  def index
    @collections = Collection.all
  end

  def create
    @collection = Collection.new(collection_params)
    if @collection.save
      render "api/collections/show"
    else
      render json: @collection.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @collection = Collection.find(params[:id])
  end

  def update
    @collection = Collection.find(params[:id])
    if @collection.update(collection_params)
      render :show 

  end

  def destroy
    @collection = Collection.find(params[:id])
  end

  private

  def collection_params
    params.permit(:name, :user_id)
  end

end
