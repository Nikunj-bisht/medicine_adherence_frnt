import axios from './axiosDeclaration';

async function postsyncHistory(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/medicine-history=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default postsyncHistory;