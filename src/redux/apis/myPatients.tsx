import { fetchPatients } from '../actions/myPatientsActions';
import axios from './axiosDeclaration';

async function myPatients(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/patients?caretakerId=d0aba7ce-1e7f-458e-8090-8cc62c00c3c5=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default fetchPatients;