import axios from "./axiosDeclaration";

async function getImageRequest(payload){
 console.log('payload',payload);
 const response = await axios.get("") 
 return response.data;
}