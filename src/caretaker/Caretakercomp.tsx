/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import Addcaretaker from './Addcaretaker';
import React from 'react';
import CaretakerReq from './Caretakerreq';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useFocusEffect} from '@react-navigation/native';
import {Alert, StyleSheet} from 'react-native';
import {Tab, TabView} from 'react-native-elements';
import {Caretaker_nurse, Userfriend} from './AllIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Caretakercomp({navigation}) {
  const [index, setIndex] = React.useState(0);

  const [login, loginstate] = React.useState(false);

  useFocusEffect(() => {
    async function checkforlog() {
      const islogged = await GoogleSignin.isSignedIn();
      const checkforlogin = await AsyncStorage.getItem('user_id');

      if (checkforlogin === null) {
        Alert.alert(
          'Sign in first to use this feature',
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
      }
      console.log(islogged);
      loginstate(islogged);
    }

    checkforlog();
  });

  return (
    <>
      <Tab
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.indicator}
        style={styles.bgColor}
        variant="primary">
        <Tab.Item
          title="Caretakers"
          containerStyle={styles.bgColor}
          titleStyle={styles.title}
          icon={Caretaker_nurse()}
        />
        <Tab.Item
          title="Caretaker request"
          titleStyle={styles.title}
          containerStyle={styles.bgColor}
          icon={Userfriend()}
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.tabViewItem}>
          <Addcaretaker navigation={navigation}></Addcaretaker>
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <CaretakerReq></CaretakerReq>
        </TabView.Item>
      </TabView>
    </>
  );
}

const styles = StyleSheet.create({
  indicator: {
    backgroundColor: 'white',
    height: 3,
  },
  bgColor: {
    backgroundColor: '#3743ab',
  },
  title: {
    fontSize: 12,
  },
  tabViewItem: {
    backgroundColor: 'white',
    width: '100%',
  },
});
