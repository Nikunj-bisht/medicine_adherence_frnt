import axios from "./axiosDeclaration";

async function fetchpatientrequests(payload){
    console.log('payload',payload);
    const response = await axios.get('/api/v1/patient/requests?caretakerId=d0aba7ce-1e7f-458e-8090-8cc62c00c3c5');
    console.log(response + 'Saga');
    return response.data;
}
 export default fetchpatientrequests;