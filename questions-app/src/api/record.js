const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');

const getRecords = async () => {
  const res = await fetch(`https://quizback-three.vercel.app/api/allresults`, {
    method: 'GET',
    headers: headers,
  });
  const records = await res.json();
  console.log(records,"recordianoo");
  return records;
};

const postRecord = async ({ nombre, puntuacion }) => {
  try {
    const response = await fetch(`https://quizback-three.vercel.app/api/resultado`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombre, puntuacion })
    });

    if (!response.ok) {
      throw new Error('Error al guardar la puntuación');
    }

    const data = await response.json();
    console.log('Puntuación guardada correctamente:', data);
    return data;
  } catch (error) {
    console.error('Error al enviar la puntuación:', error);
    throw error;
  }
};

export {
  getRecords,
  postRecord
};
