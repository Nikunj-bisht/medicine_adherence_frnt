/* eslint-disable react/self-closing-comp */
import {Text} from 'react-native';
import React from 'react';
import Addmedicine from '../addMedicine';
import {createStackNavigator} from '@react-navigation/stack';
import UserMed from '../userMed';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const CareTaker = ({navigation}) => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Addmedicine">
      <Stack.Screen
        name="Addmedicine"
        component={Addmedicine}
        options={{
          headerShown: false,
          // testID="musk",
          headerRight: () => {
            return (
              <Text
              testID='click'
              onPress={() => navigation.getParent().navigate('Events')}>
                Click
              </Text>
            );
          },
        }}></Stack.Screen>
      <Stack.Screen
        name="UserMed"
        component={UserMed}
        options={{headerShown: true}}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CareTaker;
