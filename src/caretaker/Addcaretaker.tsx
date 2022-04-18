/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  FlatList,
  RefreshControl,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {Avatar, Button, ListItem, SpeedDial} from 'react-native-elements';
import {API_URL} from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {Card} from 'react-native-paper';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {useFocusEffect} from '@react-navigation/native';

interface Props {
  navigation: any;
}

const Addcaretaker: React.FC<{navigation}> = Props => {
  const {navigation} = Props;
  const [caretakers, caretakerstate] = React.useState([]);
  const [refresh, refeereshstate] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const fetchcaretakers = async () => {
    const user_id = await AsyncStorage.getItem('user_id');
    fetch(`${API_URL}/api/caretaker/myCareTakers(Patient)?patientId=${user_id}`)
      .then(resp => resp.json())
      .then(res => {
        console.log(res);
        caretakerstate(res);
      });
  };

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      fetchcaretakers();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const renderitem = ({item}) => {
    console.log(item.patientId, 'b');

    return (
      <Card onPress={() => {}} style={styles.card}>
        <View style={styles.listItemContainer}>
          <ListItem
            style={styles.listItem}
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}>
            <Avatar
              size={64}
              rounded
              source={{
                uri: 'https://lh3.googleusercontent.com/a-/AOh14Gg1r55ukyjleOVcBDEuTUt283ClmJE4ZSeFOSmD=s96-c',
              }}></Avatar>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>
                {item.caretakerUsername}
              </ListItem.Title>
              <ListItem.Subtitle>
                {' Accepted on : ' + item.createdAt}
              </ListItem.Subtitle>
            </ListItem.Content>

            <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
              <View style={styles.iconContainer}>
                <FontAwesomeIcon
                  icon={faAngleRight as IconProp}
                  color={'black'}
                  size={17}
                />
              </View>
            </TouchableOpacity>
          </ListItem>
        </View>
      </Card>
    );
  };

  return (
    <React.Fragment>
      <View style={styles.container}>
        {caretakers.length === 0 && (
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assests/nocaretakers.jpg')}
              style={styles.image}
              resizeMode="contain"></Image>
          </View>
        )}
        <FlatList
          data={caretakers}
          renderItem={renderitem}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={fetchcaretakers}></RefreshControl>
          }></FlatList>
        <View style={styles.sdContainer}>
          <SpeedDial
            isOpen={open}
            style={styles.speedDial}
            overlayColor="white"
            buttonStyle={styles.bgColor}
            icon={{name: 'add', color: 'white'}}
            openIcon={{name: 'close', color: 'white'}}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}>
            <SpeedDial.Action
              icon={{name: 'add', color: 'white'}}
              title="Add Caretaker"
              style={styles.sdAction}
              buttonStyle={styles.bgColor}
              onPress={() => navigation.navigate('Search Caretaker')}
            />
            <SpeedDial.Action
              icon={{name: 'delete', color: 'white'}}
              title="Delete"
              buttonStyle={styles.bgColor}
              style={styles.sdAction}
              onPress={() => console.log('Delete Something')}
            />
          </SpeedDial>
          <Button buttonStyle={styles.btn} title="A"></Button>
        </View>
      </View>
    </React.Fragment>
  );
};

export default Addcaretaker;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    margin: 6,
    borderColor: 'lightgrey',
    elevation: 3,
    shadowColor: '#3743ab',
  },
  listItemContainer: {
    flexDirection: 'row',
    padding: 0,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  title: {
    fontSize: 16,
    marginLeft: 3,
    fontWeight: 'bold',
  },
  iconContainer: {
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    height: '100%',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 400,
  },
  bgColor: {
    backgroundColor: '#3743ab',
  },
  sdContainer: {
    bottom: 0,
    alignItems: 'center',
  },
  speedDial: {
    backgroundColor: 'white',
  },
  sdAction: {
    height: 50,
  },
  btn: {
    backgroundColor: 'white',
  },
});
