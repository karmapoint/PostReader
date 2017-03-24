
export const createCollectedFeed = (collectedFeed) => {
  return $.ajax({
    method: 'POST',
    url: 'api/collected_feeds',
    data: { collectedFeed },
  });
};
export const deleteCollectedFeed = (collectedFeed) => {

  return $.ajax({
    method: 'DELETE',
    url: `api/collected_feeds/${collectedFeed.feed_id}`,
    data: { collectedFeed },
  });
};

export const receiveCollectedFeed = id => {
  return $.ajax({
    method: 'GET',
    url: `api/collected_feeds/${id}`,
    data: { id }

  });
};
