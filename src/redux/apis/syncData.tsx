import axios from './axiosDeclaration';

async function fetchAcceptRequest(payload) {
  console.log('payload', payload);
  const response = await axios.get(`api/v1/medicines/sync=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default fetchAcceptRequest;