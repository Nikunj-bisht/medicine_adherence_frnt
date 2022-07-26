import axios from './axiosDeclaration';
import { API_URLS } from '../../constants/apiurl';
export const patient = {
  patientReq: async function fetchpatientreq(payload) {
    const response = await axios.get(`${API_URLS.PATIENT_REQ}?userId=${payload}`);
    return response.data;
  },
}