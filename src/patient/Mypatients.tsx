/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {API_URL} from '@env';
import {
  FlatList,
  RefreshControl,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import {Avatar, ListItem} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {Card} from 'react-native-paper';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {useFocusEffect} from '@react-navigation/native';

interface Props {
  navigation: any;
}

const Mypatient: React.FC<Props> = ({navigation}: Props) => {
  const [data, datastate] = React.useState([]);
  const [refresh, refeereshstate] = React.useState(false);

  const fetchpatients = () => {
    fetch(
      `${API_URL}/api/caretaker/myPatients(Caretaker)?caretakerId=f9c67686-55f9-495a-b214-eb89d5606678`,
    )
      .then(resp => resp.json())
      .then(res => {
        console.log(res);
        datastate(res);
      })
      .catch(err => console.log(err));
  };

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      fetchpatients();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const renderitem = ({item}) => {
    return (
      <Card
        onPress={() => {
          navigation.navigate('Patient Profile', {
            user_id: item.patientId,
          });
        }}
        style={styles.card}>
        <View style={styles.listItemContainer}>
          <ListItem
            style={styles.listItem}
            hasTVPreferredFocus={undefined}
            tvParallaxProperties={undefined}>
            <Avatar
              size={64}
              rounded
              source={{
                uri: 'https://lh3.googleusercontent.com/a-/AOh14GgrRBm3gFrvPSRlLYSiaY5KO-HpPKl1IhK3Z3rePg=s96-c',
              }}></Avatar>
            <ListItem.Content>
              <ListItem.Title style={styles.listItemTitle}>
                {item.patientName}
              </ListItem.Title>
              <ListItem.Subtitle>
                {' Created on :' + item.createdAt}
              </ListItem.Subtitle>
            </ListItem.Content>

            <TouchableOpacity onPress={() => {}} style={styles.iconTouch}>
              <View style={styles.iconContainer}>
                <FontAwesomeIcon
                  icon={faAngleRight as IconProp}
                  color={'black'}
                  size={25}
                />
              </View>
            </TouchableOpacity>
          </ListItem>
        </View>
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      {data.length === 0 && (
        <View>
          <Image
            source={require('../../assests/nopatients.png')}
            style={styles.image}
            resizeMode="contain"></Image>
        </View>
      )}
      <FlatList
        data={data}
        renderItem={renderitem}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={fetchpatients}></RefreshControl>
        }></FlatList>
    </View>
  );
};

export default Mypatient;

const styles = StyleSheet.create({
  card: {
    borderRadius: 30,
    margin: 6,
    borderColor: 'lightgrey',
    elevation: 5,
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
  listItemTitle: {
    fontSize: 16,
    marginLeft: 3,
    fontWeight: 'bold',
  },
  iconTouch: {
    paddingVertical: 15,
  },
  iconContainer: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  image: {
    width: 400,
  },
});
