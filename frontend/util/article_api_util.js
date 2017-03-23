export const fetchArticles = () => (
  $.ajax({
    method: 'GET',
    url: 'api/articles'
  })
);

export const createArticle = (article) => (
  $.ajax({
    method: 'POST',
    url: 'api/articles',
    data: { article }
  })

);
