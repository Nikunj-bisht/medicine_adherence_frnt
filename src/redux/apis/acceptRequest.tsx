import axios from './axiosDeclaration';

async function putAcceptRequest(payload) {
  console.log('payload', payload);
  const response = await axios.get(`pi/v1/accept=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default putAcceptRequest;