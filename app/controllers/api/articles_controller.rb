class Api::ArticlesController < ApplicationController

  def index
    @articles = Article.all
  end

  def create
    @article = Article.new(@article_attributes)
    @article.save 
  end

  def destroy
    @article = Article.find_by(url)
  end



  private

  def article_params
    params.permit(:title, :author, :date, :url, :image_url, :content, :feed_id, :user_id)
  end


end
