import {API_URLS} from '../../constants/apiurl';
import {useSelector,useDispatch} from 'react-redux';
import {sendLoginRequest} from '../../redux/actions/loginActions';
import React, { useEffect } from 'react';
import  AsnyncStorage from '@react-native-async-storage/async-storage';
interface Iparams {
  userinfo: any;
  token: string;
}
export const Signupuser = {
  signup: async (params: Iparams) => {
    const {userinfo, token} = params;
    let url: any = new URL(API_URLS.SIGNUP);
    url.searchParams.append('fcmToken', token);
    url.searchParams.append('picPath', userinfo.user.photo);

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        userName: userinfo.user.givenName,
        email: userinfo.user.email,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response;
  },
  loginuser: async (params: Iparams) => {
    const {userinfo, token} = params;
    let url: any = new URL(API_URLS.LOGIN);
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: userinfo.user.email,
        fcmToken: token,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    return response;
  },
//   const loginuser: React.FC<navigation> = Props =>{
//     const {navigation} = Props;
//     const login = useSelector(
//       state => state.loginReducer.userloginList,
//     );
//     const {load} = useSelector(state => state.loginReducer)
//     console.log(load, 'load');
//     const [refresh, refeereshstate] = React.useState(false);
//     const [open, setOpen] = React.useState(false);
//     const dispatch = useDispatch();
//     const sendLoginRequest = async () => {
//       let user_id = await AsnyncStorage.getItem('');
//       dispatch(sendLoginRequest());
//       refeereshstate(false);
//     };
//     useEffect(()=>{
//      sendLoginRequest();
//     }, []);
//   }
};
