import { patientProfileReducer } from '../reducers/patientProfileReducer';
import axios from './axiosDeclaration';

async function fetchprofile(payload) {
 console.log('payload',payload);
 const response = await axios.get(`/api/v1/user-details?userId =${payload}`);
 console.log(response + ' Saga ');
 return response.data;
}

export default patientProfileReducer;