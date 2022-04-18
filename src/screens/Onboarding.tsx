/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const OnboardingScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Drawer');
  }, 500);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assests/Medstick_1.png')}
        style={styles.image}
        resizeMode="contain"></Image>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#3743ab',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 400,
    marginTop: 20,
  },
});
