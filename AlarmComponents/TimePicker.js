import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

const TimePicker = () => {
  const [isDateTimePickerVisible, setIsTimePickerVisible] = useState(false);
  const showDateTimePicker = () => {
    setIsTimePickerVisible(true);
  };
  const hideDateTimePicker = () => {
    setIsTimePickerVisible(false);
  };
  const handleDateTimePicker = dateTime => {
    var currentTime = Date.now();
    if (dateTime.getTime() < currentTime) {
      Alert.alert('Please choose future Time');
      hideDateTimePicker();
      return;
    }
    hideDateTimePicker();
  };
  return (
    <>
      <Button
        title="+ Add Alarm"
        color="blue"
        onPress={() => {
          showDateTimePicker();
        }}
      />
      <DateTimePicker
        mode="datetime"
        isVisible={isDateTimePickerVisible}
        onConfirm={handleDateTimePicker}
        onCancel={hideDateTimePicker}
      />
    </>
  );
};

export default TimePicker;
