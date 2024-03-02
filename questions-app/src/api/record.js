const backendURL = 'https://quiz-app-mern-back.vercel.app';

const headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Access-Control-Allow-Origin', '*');

const getRecords = async () => {
  try {
    const res = await fetch(`${backendURL}/api/allresults`, {
      method: 'GET',
      headers: headers,
    });

    if (!res.ok) {
      throw new Error('Error al obtener los registros');
    }

    const records = await res.json();
    console.log(records, "recordianoo");
    return records;
  } catch (error) {
    console.error('Error en la función getRecords:', error);
    throw error;
  }
};

const postRecord = async ({ nombre, puntuacion }) => {
  try {
    const res = await fetch(`${backendURL}/api/result`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ nombre, puntuacion }),
    });

    if (!res.ok) {
      throw new Error('Error al enviar el registro');
    }

    const record = await res.json();
    console.log(record);
    return record;
  } catch (error) {
    console.error('Error en la función postRecord:', error);
    throw error;
  }
};

export {
  getRecords,
  postRecord
};
