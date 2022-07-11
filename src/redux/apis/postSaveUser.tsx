import axios from './axiosDeclaration';

async function postsaveuser(payload) {
  console.log('payload', payload);
  const response = await axios.get(`/api/v1/user?fcmToken=${payload}`);
  console.log(response + ' Saga ');
  return response.data;
}

export default postsaveuser;