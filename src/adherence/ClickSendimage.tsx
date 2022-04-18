/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';

const CameraScreen = ({navigation}) => {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  return (
    <View style={styles.container}>
      <View style={styles.sContainer}>
        <RNCamera
          ref={cameraRef}
          type={RNCamera.Constants.Type.back}
          style={styles.camera}></RNCamera>

        <TouchableOpacity
          onPress={async () => {
            const data = await takePicture();
            console.log(data.uri);
            navigation.navigate('Sentocaretaker', {
              image_uri: data.uri,
            });
          }}
          style={styles.touch}>
          <LottieView
            style={styles.lottieContainer}
            source={require('../../assests/animate/camera1.json')}
            autoPlay
            loop></LottieView>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  sContainer: {
    flex: 1,
  },
  camera: {
    height: '100%',
  },
  touch: {
    borderColor: 'white',
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  lottieContainer: {
    width: 240,
    height: 240,
  },
});
