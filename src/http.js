import axios from 'axios';

// const baseUrl = 'https://tap-search-assignment.herokuapp.com/documents';
const baseUrl = 'http://localhost:3000/documents';

export function search(word) {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(baseUrl + '?word=' + word);
      resolve(res.data);
    } catch (error) {
      if (error && error.response && error.response.data)
        reject(error.response.data);
      else reject(null);
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
      if (error && error.response && error.response.data)
        reject(error.response.data);
      else reject(null);
    }
  });
}

export function clearDatabase() {
  return new Promise(async (resolve, reject) => {
    try {
      await axios.post(baseUrl + '/clear', {});
      resolve();
    } catch (error) {
      if (error && error.response && error.response.data)
        reject(error.response.data);
      else reject(null);
    }
  });
}
