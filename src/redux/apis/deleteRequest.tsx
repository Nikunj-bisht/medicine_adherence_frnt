import axios from './axiosDeclaration';

async function fetchDeleteRequest(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/delete=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default fetchDeleteRequest;