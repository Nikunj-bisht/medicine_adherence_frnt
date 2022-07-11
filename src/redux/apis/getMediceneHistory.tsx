import axios from './axiosDeclaration';

async function fetchmedicenehistory(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/medicine-histories?medId=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default fetchmedicenehistory;