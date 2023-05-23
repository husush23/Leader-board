/* eslint-disable */

const post = async (id, username, score) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`;
  const data = {
    user: username,
    score: score,
  };

  const res = new Request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await fetch(res);
  const result1 = await result.json();
  //   console.log(result1);
};

export default post;
