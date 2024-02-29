const backendURL = 'https://quiz-app-mern-back.vercel.app/';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');

const getRecords = async () => {
  const res = await fetch(`${backendURL}/api/allresults`, {
    method: 'GET',
    headers: headers,
  });
  const records = await res.json();
  console.log(records,"recordianoo");
  return records;
};

const postRecord = async ({ nombre, puntuacion }) => {
  const res = await fetch(`${backendURL}/api/result`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ nombre, puntuacion }),
  });
  const record = await res.json();
  console.log(record);
  return record;
};

export {
  getRecords,
  postRecord
};
