import axios from './axiosDeclaration';
import { API_URLS } from '../../constants/apiurl';
export const acceptRequest = {
  reqAccept: async function fetchpatientreqaccept(payload) {
    const response = await axios.get(`${API_URLS.REQ_ACCEPT}`);
    return response.data;
  },

}
