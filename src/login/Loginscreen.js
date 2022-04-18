/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Progress from 'react-native-progress';
import {API_URL} from '@env';
import Toast from 'react-native-toast-message';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-elements';

import {Formik} from 'formik';
import * as yup from 'yup';
import LottieView from 'lottie-react-native';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
});

const Loginscreen = props => {
  const [loading, loadingstate] = React.useState(false);
  const [text, setText] = React.useState('');

  async function loginuser(email) {
    try {
      loadingstate(true);
      let url = new URL(`${API_URL}/api/user/login`);
      url.searchParams.append('email', email);
      await fetch(url, {
        method: 'POST',
      })
        .then(resp => resp.json())
        .then(async res => {
          console.log(res);
          if (res.status === 'success') {
            console.info(res.user_id);
            await AsyncStorage.setItem('user_id', res.userentity[0].userId);
            await AsyncStorage.setItem('user_name', res.userentity[0].userName);

            console.info(
              await AsyncStorage.getItem('user_id'),
              await AsyncStorage.getItem('user_name'),
            );
            loadingstate(false);
            Toast.show({
              type: 'success',
              text1: 'Loggedin successfully',
            });
            setTimeout(() => {
              props.navigation.pop(1);
            }, 3000);
          } else if (res.status === 'Not found') {
            loadingstate(false);

            Toast.show({
              type: 'info',
              text1: 'No account present with this id',
            });
          }
        })
        .catch(err => {
          console.log(err);
          Toast.show({
            type: 'info',
            text1: 'Failed',
          });
        });
    } catch (err) {
      console.log(err);
      Toast.show({
        type: 'info',
        text1: 'Failed',
      });
    }
  }

  return (
    <View style={styles.container}>
      <Toast visibilityTime={3000}></Toast>
      {/* <Image style={{height:100, width:'30%'}} source={require("../../assests/Medstick.png")} /> */}
      <Text style={styles.text}>{'LOGIN'}</Text>

      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{email: ''}}
        onSubmit={values => loginuser(values.email)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <TextInput
              name="email"
              placeholder="Email Address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              style={styles.textInput}
            />
            {errors.email && touched.email && (
              <Text style={styles.errEmail}>{errors.email}</Text>
            )}

            <Button
              style={{alignItems: 'center'}}
              buttonStyle={styles.loginBtn}
              title="Login"
              disabled={!isValid}
              onPress={() => {
                handleSubmit();
              }}
              containerStyle={styles.loginBtnContainer}></Button>
            <Text style={{marginTop: 10}}>OR</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <View style={styles.signupContainer}>
                <Text>Signup with </Text>
                <LottieView
                  style={styles.lottieContainer}
                  source={require('../../assests/animate/google.json')}
                  autoPlay
                  loop
                />
              </View>
            </TouchableOpacity>
            {loading && (
              <Progress.CircleSnail
                spinDuration={1500}
                size={80}
                color={['red', 'green', 'yellow']}
              />
            )}
          </>
        )}
      </Formik>
    </View>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    margin: 30,
    fontWeight: 'bold',
  },
  textInput: {
    width: '80%',
    backgroundColor: 'white',
  },
  errEmail: {
    fontSize: 16,
    color: 'red',
  },
  loginBtn: {
    backgroundColor: '#3743ab',
    width: '70%',
    alignItems: 'center',
  },
  loginBtnContainer: {
    backgroundColor: '#3743ab',
    width: '70%',
    alignItems: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieContainer: {
    width: 80,
    height: 80,
  },
});
