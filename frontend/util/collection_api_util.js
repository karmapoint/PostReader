export const fetchCollections = () => (
  $.ajax({
    method: 'GET',
    url: 'api/collections'
  })
);

export const fetchCollection = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/collections/${id}`,
  })
);

export const createCollection = (collection_name) => {

  return $.ajax({
    method: 'POST',
    url: 'api/collections',
    data: { collection_name }
  });
};
export const updateCollection = (collection_name) => {

  return $.ajax({
    method: 'PATCH',
    url: 'api/collections',
    data: { collection_name }
  });
};
