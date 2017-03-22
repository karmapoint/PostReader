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

export const createCollection = (name) => {

  return $.ajax({
    method: 'POST',
    url: 'api/collections',
    data: { name }
  });
};
export const updateCollection = (name) => {

  return $.ajax({
    method: 'PATCH',
    url: 'api/collections',
    data: { name }
  });
};
