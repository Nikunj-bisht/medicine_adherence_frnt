import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useFocusEffect} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
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
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.editProfile}>{'View and edit profile'}</Text>
      </View>
      <Image
        source={{
          uri: umg,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e3f2fd',
    marginBottom: 20,
  },
  name: {
    color: 'black',
    fontWeight: 'bold',
  },
  editProfile: {
    fontWeight: 'bold',
    color: '#2196f3',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 70,
  },
});
