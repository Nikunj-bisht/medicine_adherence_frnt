import axios from './axiosDeclaration';
import { API_URLS } from '../../constants/apiurl';
export const patient = {
 fetchPatient: async function fetchPatient(payload) {
    const response = await axios.get(`${API_URLS.GET_PATIENT}?caretakerId=${payload}`);
    return response.data;
  },
  patientProfile: async function fetchpatientdetail(payload) {
    const response = await axios.get(`${API_URLS.PATIENT_PROFILE}?userId=${payload}`);
    return response.data;
  },
  patientReq: async function fetchpatientreq(payload) {
    const response = await axios.get(`${API_URLS.PATIENT_REQ}?userId=${payload}`);
    return response.data;
  },
  notifyPatient: async function notifypatient(payload) {
    const response = await axios.put(`${API_URLS.NOTIFY_PATIENT}?medname=${payload}`);
    return response.data;
  },
}