import { Linking, Share, StyleSheet, View} from 'react-native';
import React from 'react';
import SettingsList from 'react-native-settings-list';

interface Props {
  navigation: any;
}

const Settings: React.FC<Props> = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <SettingsList borderColor="white" backgroundColor="white">
        <SettingsList.Header
          headerText="Settings"
          headerStyle={styles.header}
        />
        <SettingsList.Item
          hasNavArrow={true}
          title="Notification settings"
          titleStyle={styles.title}
          onPress={() => Linking.openSettings()}
        />

        <SettingsList.Header
          headerText="General"
          headerStyle={styles.header}
        />
        <SettingsList.Item
          hasNavArrow={false}
          title="About Medstick"
          titleStyle={styles.title}
          onPress={() => navigation.navigate('About')}
        />
        <SettingsList.Item
          hasNavArrow={false}
          title="Share with friends and family"
          titleStyle={styles.title}
          onPress={async () => {
            try {
              await Share.share({
                title: 'Medstick',
                message:
                  'Hello Nikunj invited to use Medstick ' +
                  'https://play.google.com/store/apps/details?id=com.animesafar.dinterviewkit',
                url: 'https://cdn.discordapp.com/attachments/941592669933682699/955175698568462437/vinaylogo.png',
              });
            } catch (error) {}
          }}
        />
      </SettingsList>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
 container: {
  height: '100%', 
  backgroundColor: 'white',
 },
 header: {
  color: 'gray', 
  fontSize: 16,
 },
 title: {
  color: 'black', 
  fontSize: 18,
 },
});

