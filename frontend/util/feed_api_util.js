export const fetchFeeds = () => (
  $.ajax({
    method: 'GET',
    url: 'api/feeds'
  })
);

export const fetchFeed = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/feeds/${id}`,
  })
);

export const createFeed = (feed_url) => {
  return (
  $.ajax({
    method: 'POST',
    url: 'api/feeds',
    data: { feed_url }
  })
);
};
