const get = async (id = 'qdXYMNzZiowFhKCKo3tu') => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  const request = new Request(url);

  const res = await fetch(request);
  const { result } = await res.json();
  return result;
};

export default get;
