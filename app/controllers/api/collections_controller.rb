class Api::CollectionsController < ApplicationController

  def index
    if current_user
      @collections = current_user.collections
    end

  end

  def create
    @collection = Collection.new(collection_params)
    @collection.user_id = current_user.id 
    if @collection.save
      render :show
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

  end

  def destroy
    @collection = Collection.find(params[:id])
  end

  private

  def collection_params
    params.permit(:name, :user_id)
  end

end
