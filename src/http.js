import axios from 'axios';

const baseUrl = 'http://localhost:3000/documents';

export function search(word) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(baseUrl + '?word=' + word);
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
}

export function addDocument(body) {
  return new Promise(async (resolve, reject) => {
    try {
      const splittedBody = body.split('\n\n');
      const res = await axios.post(baseUrl, { document: splittedBody });
      resolve(res.data);
    } catch (error) {
      reject(error.response.data);
    }
  });
}
