import axios from './axiosDeclaration';
import { API_URLS } from '../../constants/apiurl';


interface Iparams {
  meds_id: any;
  syncData: any;
}

const adherence = {
  getmedhistory: async function getMedHistory(payload) {
    const response = await axios.get(`${API_URLS.GET_MED_HISTORY}?medId=${payload}`);
    return response.data;
  }

};
export default adherence;