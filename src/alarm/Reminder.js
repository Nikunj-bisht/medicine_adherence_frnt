import React, {useEffect} from 'react';
import {Alert, View, Text, Dimensions, Image} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {Divider} from 'react-native-elements/dist/divider/Divider';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/MaterialIcons';
import InteractiveTextInput from 'react-native-text-input-interactive';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import {time_data, day_data} from './Timedata';
import PushNotification, {Importance} from 'react-native-push-notification';
import LottieView from 'lottie-react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown, faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import {TextInput} from 'react-native-paper';
import CheckBox from 'react-native-check-box';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

import SQLite from 'react-native-sqlite-storage';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import commonjs from 'react-native-picker-horizontal/lib/commonjs';

var daate;
var hrs;
var min;
const Reminder = ({route, navigation}) => {
  const db = SQLite.openDatabase(
    {
      name: 'MedRemdb',
      location: 'default',
    },
    () => {},
    error => {
      console.log(error);
    },
  );
  const isfocus = useIsFocused();
  // PushNotification.getChannels(function (ids) {
  //   console.log(ids);
  // });

  useEffect(() => {
    db.transaction(txn => {
      console.log('e');
      txn.executeSql(
        'SELECT * FROM `User_medicines` where user_id = ? AND status = ?',
        [id, 1],
        function (tx, res) {
          console.log('success');
          console.log(res.rows.item(0));
          titlestate(res.rows.item(0).title);
        },
      );
    });
  }, []);

  const sliderOneValuesChange = values => setSliderOneValue(values);

  const sliderOneValuesChangeFinish = () => setSliderOneChanging(false);
  const multiSliderValuesChange = values => {
    var curr_date = new Date();
    console.log(curr_date);
    console.log(curr_date.setDate(curr_date.getDate() + values[0]));

    console.log(curr_date.getDate(), values);
    end_datestate(curr_date);
    store_end_date(curr_date);
    setMultiSliderValue(values);
  };

  const {id} = route.params;
  console.log(id);
  let height = Dimensions.get('window').height;

  const [picker, pickerstate] = React.useState(false);
  const [selectedItems, slectedstate] = React.useState([]);
  const [selecteddaysItems, slecteddaysstate] = React.useState([]);
  const [load, loadstate] = React.useState(false);
  const [start_date, start_datestate] = React.useState(new Date());
  const [end_date, end_datestate] = React.useState(new Date());
  const [store_start_date, store_start_datestate] = React.useState(new Date());
  const [store_end_date, store_end_datestate] = React.useState(new Date());
  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [title, titlestate] = React.useState('');
  const [time_picker_mode, time_picker_mode_state] = React.useState(false);
  const [timeings, timestate] = React.useState('');
  const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
  const [sliderOneValue, setSliderOneValue] = React.useState([5]);
  const [multiSliderValue, setMultiSliderValue] = React.useState([0]);
  const [timearray, timearraystate] = React.useState([]);

  const onSelectedItemsChange = selectedi => {
    console.log(selectedi.id);
    slectedstate(selectedi);
  };
  const onSelecteddaysItemsChange = selectedi => {
    slecteddaysstate(selectedi);
  };
  const hideDatePicker = () => {
    pickerstate(false);
  };
  const titlechange = txt => {
    titlestate(txt);
  };
  const hideDatePickerfortime = () => {
    time_picker_mode_state(false);
  };

  const setreminderwithselecteddate = titl => {
    var now = new Date();

    now.setDate(start_date.getDate());
    now.setHours(hrs);
    now.setMinutes(min);
    console.log(now.getDate(), now.getHours(), now.getTime());
    console.log(new Date(Date.now()));
    console.log(Date.parse(now));
        console.log("now",now);

    var num = Math.floor(Math.random() * 90000) + 10000;

    PushNotification.createChannel(
      {
        channelId: num.toString(), // (required)
        channelName: 'Med channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );

    PushNotification.localNotificationSchedule({
      //... You can use all the options from localNotifications
      title: titl,
      message: 'Time to eat dolo',
      subText: 'Mark as read if you have taken', // (required)
      id: num.toString(),
      color: '#3743ab',
      visibility: 'public',
      usesChronometer: true,

      date: new Date(now.getTime()), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
      vibrate: true,
      playSound: true,

      soundName: 'android.resource://com.project/raw/my_sound.mp3',
      importance: Importance.HIGH,
      repeatType: 'day',

      smallIcon: '',
      vibrate: true,

      actions: ['Taken', 'Skip', 'Send '],

      /* Android Only Properties */
      repeatTime: 3, // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.
    });
  };

  const handleConfirm = date => {
    console.log(date)
    console.warn(
      'A date has been picked: ',
      date,
      date.getHours(),
      date.getMinutes(),
    );
    start_datestate(date);
    store_start_date(date)
    daate = date.getDate();
    hideDatePicker();
  };

  const handleConfirmfortime = date => {
    date.ge;
    console.log('A time has been picked: ', date.getHours(), date.getMinutes());
    hrs = date.getHours();
    min = date.getMinutes();
    if (date.getHours() > 11) {
      console.log(timeings);
      timearray.push(date.getHours() + ':' + date.getMinutes() + ' PM');
      timestate(
        timeings + ' ' + date.getHours() + ':' + date.getMinutes() + ' PM ,',
      );
      console.log(timearray);
    } else {
      timearray.push(date.getHours() + ':' + date.getMinutes() + ' AM');

      timestate(
        timeings + ' ' + date.getHours() + ':' + date.getMinutes() + ' AM ,',
      );
      console.log(timeings);
    }
    hideDatePickerfortime();
  };

  const savereminder = () => {
    loadstate(true);
    let time = '';
    let days = '';
    if (check2) {
      for (let i = 0; i < timearray.length; i++) {
        if(i === timearray.length-1){

          time += timearray[i];
           
        }else{
          time += timearray[i]+"-";

        }
      }
      for (let i = 0; i < selecteddaysItems.length; i++) {
        if(i == selecteddaysItems.length-1){
          days += selecteddaysItems[i];

        }else{
          days += selecteddaysItems[i] + ':';

        }
      }
      console.log(time, days);
    }
    console.log('date',store_end_date.toISOString())
    db.transaction(function (txn) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS User_medicines(user_id INTEGER PRIMARY KEY NOT NULL, medicine_name TEXT, medicine_des TEXT , title TEXT, time TEXT , days TEXT , start_date TEXT , end_date TEXT , status INTEGER , sync INTEGER)',
        [],
      );

      txn.executeSql(
        'UPDATE User_medicines SET title=? , time=? , days=? , start_date =? , end_date=? , status=? , sync=? where user_id= ' +
          id,
        [title, time, days, store_start_date.toISOString() , store_end_date.toISOString(), 1, 0],
      );

      txn.executeSql('SELECT * FROM `User_medicines`', [], function (tx, res) {
        for (let i = 0; i < res.rows.length; ++i) {
          console.log('item:', res.rows.item(i));
        }
        setreminderwithselecteddate(title);

        loadstate(false);
      });
    });

    console.log(selectedItems, selecteddaysItems);
  };

  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <View style={{height: '100%', padding: 7}}>
        <TouchableOpacity
          onPress={() => {
            pickerstate(true);
          }}
          style={{height: 100, flexDirection: 'row', marginTop: 10}}>
          <View style={{flexDirection: 'column', width: '100%'}}>
            <Text style={{fontSize: 15, marginLeft: 8, fontWeight: '700'}}>
              Start Date
            </Text>
            <Text style={{fontSize: 15, marginLeft: 8, color: 'black'}}>
              {start_date.toISOString().split('T')[0]}
            </Text>
            <Text style={{fontSize: 15, marginLeft: 8, fontWeight: '700'}}>
              End Date
            </Text>

            <Text style={{fontSize: 15, marginLeft: 8, color: 'black'}}>
              {end_date.toISOString().split('T')[0]}
            </Text>
          </View>

          <FontAwesomeIcon
            icon={faCaretDown}
            style={{right: 0, position: 'absolute'}}
            color=""></FontAwesomeIcon>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={picker}
          mode="date"
          display="default"
          style={{backgroundColor: '#3743ab'}}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
        <DateTimePickerModal
          isVisible={time_picker_mode}
          mode="time"
          onConfirm={handleConfirmfortime}
          onCancel={hideDatePickerfortime}
        />
        <TextInput
          selectionColor="#3743ab"
          outlineColor="#3743ab"
          activeUnderlineColor="#3743ab"
          placeholder="Title for reminder"
          label="Title"
          style={{margin: 8, marginBottom: 14, marginTop: 20}}
          mode="outlined"
          value={title}
          onChangeText={titlechange}></TextInput>
        {/* <InteractiveTextInput mainColor="black" placeholder="Title"
                    style={{ borderColor: 'black', position: 'absolute', justifyContent: 'center' }}
                    onChangeText={titlechange}></InteractiveTextInput> */}
        <Divider width={1}></Divider>
        <TouchableOpacity
          onPress={() => {
            time_picker_mode_state(true);
          }}
          style={{height: 70, flexDirection: 'row', marginTop: 10}}>
          <View style={{flexDirection: 'column', width: '100%'}}>
            <Text
              style={{
                fontSize: 15,
                marginLeft: 8,
                fontWeight: '700',
                marginBottom: 10,
              }}>
              Select Time
            </Text>
            <Text style={{fontSize: 15, marginLeft: 8}}>{timeings}</Text>
          </View>

          <FontAwesomeIcon
            icon={faCaretDown}
            style={{right: 0, position: 'absolute'}}
            color=""></FontAwesomeIcon>
        </TouchableOpacity>
        <Divider width={1}></Divider>
        <View style={{padding: 10}}>
          <TouchableOpacity>
            <Text style={{fontSize: 16, fontWeight: '700'}}>Select Days</Text>
          </TouchableOpacity>
          <CheckBox
            style={{padding: 10}}
            onClick={() => {
              setCheck1(!check1);
              setCheck2(false);
            }}
            isChecked={check1}
            checkBoxColor="#3743ab"
            leftText={'Everyday'}
          />
          <CheckBox
            style={{padding: 10}}
            onClick={() => {
              setCheck2(!check2);
              setCheck1(false);
            }}
            isChecked={check2}
            checkBoxColor="#3743ab"
            leftText={'Selected days'}
          />

          {check2 && (
            <SectionedMultiSelect
              IconRenderer={Icon}
              items={day_data}
              uniqueKey="id"
              hideSearch={true}
              subKey="children"
              selectText="Choose days"
              showDropDowns={true}
              expandDropDowns={true}
              readOnlyHeadings={true}
              onSelectedItemsChange={onSelecteddaysItemsChange}
              selectedItems={selecteddaysItems}></SectionedMultiSelect>
          )}
        </View>
        <Divider></Divider>
        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginTop: 18,
          }}>
          <Text style={{fontWeight: '700'}}>
            {'Duration : ' + multiSliderValue + ' days'}
          </Text>
          <MultiSlider
            values={[multiSliderValue[0]]}
            sliderLength={350}
            onValuesChange={multiSliderValuesChange}
            max={100}
            step={1}
          />
        </View>
        <Button
          loading={load}
          title="Save reminder"
          onPress={savereminder}
          buttonStyle={{backgroundColor: '#3743ab', width: '50%'}}
          containerStyle={{
            alignItems: 'center',
            width: '100%',
            marginTop: 35,
          }}></Button>
      </View>
    </View>
  );
};

export default Reminder;
