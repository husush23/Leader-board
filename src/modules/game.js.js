const createGame = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  const data = { name: "Kadare's Game" };

  const request = new Request(url, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const response = await fetch(request);

  const responseData = await response.json();
  // console.log(responseData);
  const gameId = responseData.result.split(' ')[3];
  return gameId;
};

export default createGame;
