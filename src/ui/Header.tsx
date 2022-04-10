import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileHeader: React.FC = () => {
  const [umg, imgstate] = React.useState('https://i.stack.imgur.com/l60Hf.png');
  const [name, namestate] = React.useState('');

  useFocusEffect(() => {
    async function getuser() {
      try {
        if (!(await GoogleSignin.isSignedIn())) {
          imgstate('https://i.stack.imgur.com/l60Hf.png');
          await AsyncStorage.getItem('user_id');
          let username = await AsyncStorage.getItem('user_name');
          if (username !== null) {
            username = '';
          }
          namestate(username);
          return;
        }
        const user = await GoogleSignin.getCurrentUser();

        // console.log(user);
        imgstate(user.user.photo);
        namestate(user.user.name);
      } catch (err) {}
    }
    getuser();
  });

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#e3f2fd',
        marginBottom: 20,
      }}>
      <View>
        <Text style={{color: 'black', fontWeight: 'bold'}}>{name}</Text>
        <Text style={{fontWeight: 'bold', color: '#2196f3'}}>
          {'View and edit profile'}
        </Text>
      </View>
      <Image
        source={{
          uri: umg,
        }}
        style={{width: 80, height: 80, borderRadius: 70}}
      />
    </View>
  );
};

export default ProfileHeader;