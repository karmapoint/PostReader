
export const createCollectedFeed = (collectedFeed) => {

  return $.ajax({
    method: 'POST',
    url: 'api/collected_feeds',
    data: { collectedFeed }
  });
};
