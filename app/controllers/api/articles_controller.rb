class Api::ArticlesController < ApplicationController

  def index
    @articles = current_user.articles
  end

  def create
    @article = Article.new(article_params)
    @article.user_id = current_user.id
    if @article.save
      render :show
    else
      render json: @article.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show
    @article = Article.find_by(id)
  end

  def destroy
    @article = Article.find_by(url)
  end



  private

  def article_params
    params.require(:article).permit(:title, :author, :date, :url, :image_url, :content, :feed_id, :user_id)
  end


end
