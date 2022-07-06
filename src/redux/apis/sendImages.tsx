import axios from './axiosDeclaration';

async function sendImageRequest(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/image =${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default sendImageRequest;