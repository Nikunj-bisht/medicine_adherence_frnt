import { getPdfRequest } from "../actions/getPdfActions";
import axios from "./axiosDeclaration";

async function sendpdf(payload){
    console.log('payload',payload);
    const response = await axios.get('/api/v1/pdf?medId=${payload}');
    console.log(response + 'Saga');
    return response.data;
}

export default getPdfRequest;