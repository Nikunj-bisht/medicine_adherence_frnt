import axios from './axiosDeclaration';
import { API_URLS } from '../../constants/apiurl';


interface Iparams {
  meds_id: any;
  syncData: any;
}

const syncData = {

  syncmeds: async function syncMeds(payload) {
    const response = await axios.get(`${API_URLS.SYNC_MEDS}=${payload}`);
    return response.data;
  },
 

};


export default syncData;