
export const createCollectedFeed = (collectedFeed) => {

  return $.ajax({
    method: 'POST',
    url: 'api/collected_feeds',
    data: { collectedFeed }
  });
};
export const deleteCollectedFeed = (id) => {

  return $.ajax({
    method: 'DELETE',
    url: `api/collected_feeds/${id}`,
  });
};

export const receiveCollectedFeed = id => {
  return $.ajax({
    method: 'GET',
    url: `api/collected_feeds/${id}`,
    data: { id }

  });
};
