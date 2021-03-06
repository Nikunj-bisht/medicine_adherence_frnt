/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import React, {useEffect} from 'react';
import {Text, View, Image, ScrollView, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  faContactBook,
  faDroplet,
  faMarsAndVenus,
  faRing,
  faSortNumericUp,
  faUser,
  faWeight,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Picker} from '@react-native-picker/picker';
import {TextInput} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {API_URL} from '../repositories/var';
import {Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as yup from 'yup';
import styles from './ProfileStyles/profileStyles';
import SavedDetails from './savedDetails';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {useFocusEffect} from '@react-navigation/native';

const loginValidationSchema = yup.object().shape({
  Bio: yup.string().required('Bio is Required'),
  Contact: yup
    .string()
    .min(10, ({min}) => `Contact number must be ${min} characters`)
    .max(10, ({max}) => `Contact number can be only ${max} characters`)
    .required('Contact is Required'),
  Age: yup.string().min(2, ({min}) => `Age number must be ${min} characters`),
  Weight: yup
    .string()
    .min(2, ({min}) => `Weight must be at least ${min} characters`),
  Gender: yup
    .string()
    .min(3, ({min}) => `Gender must be at least ${min} characters`)
    .required(),
  MaritalStatus: yup
    .string()
    .min(3, ({min}) => `MaritalStatus must be at least ${min} characters`)
    .required(),
  BloodGroup: yup.string().required(),
});

const Profile = ({navigation}) => {
  const [name, namestate] = React.useState({
    user: {name: 'Not logged in!', photo: '', email: ''},
  });
  const [img, imgstate] = React.useState('https://i.stack.imgur.com/l60Hf.png');

  const [load, loadstate] = React.useState(false);

  const [editenabled, editstate] = React.useState(false);

  async function storeuserdetails(values: any) {
    loadstate(true);
    await AsyncStorage.setItem('bio', values.Bio);
    await AsyncStorage.setItem('contact', values.Contact);
    await AsyncStorage.setItem('age', values.Age);
    await AsyncStorage.setItem('weight', values.Weight);
    await AsyncStorage.setItem('gender', values.Gender);
    await AsyncStorage.setItem('maritalstatus', values.MaritalStatus);
    await AsyncStorage.setItem('bloodgroup', values.BloodGroup);

    let sbio = await AsyncStorage.getItem('bio');
    let scontact = await AsyncStorage.getItem('contact');
    let sage = await AsyncStorage.getItem('age');
    let sweight = await AsyncStorage.getItem('weight');
    let sgender = await AsyncStorage.getItem('gender');
    let maritalstatus = await AsyncStorage.getItem('maritalstatus');
    let sblood = await AsyncStorage.getItem('bloodgroup');

    const user_id = await AsyncStorage.getItem('user_id');

    await fetch(`${API_URL}/api/v1/user-details?userId=${user_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        bio: sbio,
        age: sage,
        userContact: scontact,
        gender: sgender,
        martialStatus: maritalstatus,
        bloodGroup: sblood,
        weight: sweight,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(resp => {
        if (resp.status === 200) {
          loadstate(false);
          editstate(false);
        }
      })
      .then(() => {
        Toast.show({
          type: 'success',
          text1: 'Details saved',
        });
      });

    Toast.show({
      type: 'info',
      text1: 'Please fill details properly',
    });
  }
  useFocusEffect(
    React.useCallback(() => {
      async function getuser() {
        try {
          if (!(await GoogleSignin.isSignedIn())) {
            Alert.alert(
              'Sign in first to Edit Profile',
              'Click ok to proceed',
              [
                {
                  text: 'Ok',
                  onPress: () => {
                    navigation.navigate('Login');
                  },
                },
                {
                  text: 'Cancel',
                  onPress: () => {
                    navigation.navigate('Home');
                  },
                },
              ],
            );
            return;
          }
          const user = await GoogleSignin.getCurrentUser();

          namestate(user);
          imgstate(user.user.photo);
        } catch (err) {}
      }
      getuser();
      let isAcive = false;
      return () => {
        isAcive = false;
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Toast visibilityTime={1500}></Toast>
        <View style={styles.container1}>
          <View style={styles.top}>
            <Image source={{uri: img}} style={styles.avatar}></Image>
            <View style={styles.topItem}>
              <Text style={styles.topItemText1}>{name.user.name}</Text>
              <Text style={styles.topItemText2}>{name.user.email}</Text>
            </View>
          </View>
          <View>
            <Button
              title="Edit profile"
              buttonStyle={styles.editButton}
              containerStyle={styles.editButtonConatiner}
              onPress={() => editstate(true)}></Button>
          </View>
          <View>
            <View>
              {editenabled ? (
                <>
                  <View>
                    <Formik
                      validationSchema={loginValidationSchema}
                      initialValues={{
                        Bio: '',
                        Contact: '',
                        Age: '',
                        Weight: '',
                        Gender: '',
                        MaritalStatus: '',
                        BloodGroup: '',
                      }}
                      onSubmit={values => storeuserdetails(values)}>
                      {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                        isValid,
                        touched,
                        setFieldValue,
                      }) => (
                        <View style={styles.inputContainer}>
                          <TextInput
                            label=" Bio"
                            mode="flat"
                            style={styles.textInput}
                            onChangeText={handleChange('Bio')}
                            onBlur={handleBlur('Bio')}
                            value={values.Bio}
                            left={
                              <TextInput.Icon
                                name={() => (
                                  <FontAwesomeIcon
                                    size={18}
                                    icon={faUser as IconProp}
                                    color="#3743ab"></FontAwesomeIcon>
                                )}
                              />
                            }
                          />
                          {errors.Bio && touched.Bio && (
                            <Text style={styles.errorText}>{errors.Bio}</Text>
                          )}
                          <TextInput
                            label=" Contact"
                            mode="flat"
                            keyboardType="numeric"
                            style={styles.textInput}
                            onChangeText={handleChange('Contact')}
                            onBlur={handleBlur('Contact')}
                            value={values.Contact}
                            left={
                              <TextInput.Icon
                                name={() => (
                                  <FontAwesomeIcon
                                    size={18}
                                    icon={faContactBook as IconProp}
                                    color="#3743ab"></FontAwesomeIcon>
                                )}
                              />
                            }
                          />
                          {errors.Contact && touched.Contact && (
                            <Text style={styles.errorText}>
                              {errors.Contact}
                            </Text>
                          )}
                          <TextInput
                            label=" Age(in years)"
                            mode="flat"
                            keyboardType="numeric"
                            style={styles.textInput}
                            onChangeText={handleChange('Age')}
                            onBlur={handleBlur('Age')}
                            value={values.Age}
                            left={
                              <TextInput.Icon
                                name={() => (
                                  <FontAwesomeIcon
                                    size={18}
                                    icon={faSortNumericUp as IconProp}
                                    color="#3743ab"></FontAwesomeIcon>
                                )}
                              />
                            }
                          />
                          {errors.Age && (
                            <Text style={styles.errorText}>{errors.Age}</Text>
                          )}
                          <TextInput
                            label=" Weight(in kg)"
                            mode="flat"
                            keyboardType="numeric"
                            style={styles.textInput}
                            onChangeText={handleChange('Weight')}
                            onBlur={handleBlur('Weight')}
                            value={values.Weight}
                            left={
                              <TextInput.Icon
                                name={() => (
                                  <FontAwesomeIcon
                                    size={18}
                                    icon={faWeight as IconProp}
                                    color="#3743ab"></FontAwesomeIcon>
                                )}
                              />
                            }
                          />
                          {errors.Weight && (
                            <Text style={styles.errorText}>
                              {errors.Weight}
                            </Text>
                          )}
                          <View style={styles.pickerContainer}>
                            <View style={styles.pickerIcon}>
                              <FontAwesomeIcon
                                size={18}
                                icon={faMarsAndVenus as IconProp}
                                color="#3743ab"></FontAwesomeIcon>
                            </View>
                            <View style={styles.picker}>
                              <Picker
                                mode="dropdown"
                                selectedValue={values.Gender}
                                onValueChange={itemchange =>
                                  setFieldValue('Gender', itemchange)
                                }>
                                <Picker.Item
                                  label="Gender"
                                  value="Gender"
                                  style={styles.pickerItem}
                                />
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                                <Picker.Item label="Other" value="Other" />
                              </Picker>
                            </View>
                            <Text style={styles.pickerText}>
                              {touched.Gender && errors.Gender}
                            </Text>
                          </View>
                          <View style={styles.pickerContainer}>
                            <View style={styles.pickerIcon}>
                              <FontAwesomeIcon
                                size={18}
                                icon={faRing as IconProp}
                                color="#3743ab"></FontAwesomeIcon>
                            </View>
                            <View style={styles.picker}>
                              <Picker
                                mode="dropdown"
                                selectedValue={values.MaritalStatus}
                                onValueChange={itemchange =>
                                  setFieldValue('MaritalStatus', itemchange)
                                }>
                                <Picker.Item
                                  label="Marital Status"
                                  value="Marital Status"
                                  style={styles.pickerItem}
                                />

                                <Picker.Item label="Married" value="Married" />
                                <Picker.Item
                                  label="Unmarried"
                                  value="Unmarried"
                                />
                              </Picker>
                            </View>
                            <Text style={styles.pickerText}>
                              {touched.MaritalStatus && errors.MaritalStatus}
                            </Text>
                          </View>
                          <View style={styles.pickerContainer}>
                            <View style={styles.pickerIcon}>
                              <FontAwesomeIcon
                                size={18}
                                icon={faDroplet as IconProp}
                                color="#3743ab"></FontAwesomeIcon>
                            </View>
                            <View style={styles.bgPickerView}>
                              <Picker
                                mode="dropdown"
                                style={styles.bgPicker}
                                selectedValue={values.BloodGroup}
                                onValueChange={itemchange =>
                                  setFieldValue('BloodGroup', itemchange)
                                }>
                                <Picker.Item
                                  label="BloodGroup"
                                  value="BloodGroup"
                                  style={styles.pickerItem}
                                />

                                <Picker.Item label="A+" value="A+" />
                                <Picker.Item label="A-" value="A" />
                                <Picker.Item label="B+" value="B+" />
                                <Picker.Item label="B-" value="B-" />
                                <Picker.Item label="O+" value="O+" />
                                <Picker.Item label="O-" value="O-" />
                                <Picker.Item label="AB+" value="AB+" />
                                <Picker.Item label="AB-" value="AB-" />
                              </Picker>
                            </View>
                            <Text style={styles.pickerText}>
                              {touched.BloodGroup && errors.BloodGroup}
                            </Text>
                          </View>
                          <View style={styles.saveButtonView}>
                            <Button
                              loading={load}
                              onPress={handleSubmit}
                              title="SAVE"
                              buttonStyle={styles.saveButton}
                              containerStyle={styles.saveButtonContainer}
                              disabled={!isValid}
                            />
                          </View>
                        </View>
                      )}
                    </Formik>
                  </View>
                </>
              ) : (
                <SavedDetails />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
