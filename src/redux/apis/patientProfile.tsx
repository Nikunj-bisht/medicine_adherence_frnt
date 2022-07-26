import axios from './axiosDeclaration';
import { API_URLS } from '../../constants/apiurl';
export const patient = {
  patientProfile: async function fetchpatientdetail(payload) {
    const response = await axios.get(`${API_URLS.PATIENT_PROFILE}?userId=${payload}`);
    return response.data;
  },
}