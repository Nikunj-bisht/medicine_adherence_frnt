import axios from './axiosDeclaration';
import { API_URLS } from '../../constants/apiurl';
export const deleteRequest = {
  
  reqDelete: async function fetchpatientreqdelete(payload) {
    const response = await axios.get(`${API_URLS.REQ_DELETE}`);
    return response.data;
  },
}