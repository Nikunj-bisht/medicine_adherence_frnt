import axios from './axiosDeclaration';
import { API_URLS } from '../../constants/apiurl';


interface Iparams {
  meds_id: any;
  syncData: any;
}

const downloadPdf = {
  syncmedicineHistory: async (params: Iparams) => {
    const {meds_id, syncData} = params;
    let response = await fetch(`${API_URLS.SYNC_HISTORY}?medId=${meds_id}`, {
      method: 'POST',
      body: JSON.stringify(syncData),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response;
  },
  downloadPdf: async function downloadPdf(payload) {
    const response = await axios.get(`${API_URLS.DOWNLOAD_PDF}?medId=${payload}`);
    return response.data;
  },
};


export default downloadPdf;

