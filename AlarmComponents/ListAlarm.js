import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ListItem} from 'react-native-elements';

const ListAlarm = () => {
  return (
    <View>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.titleStyle}>2:36 PM</ListItem.Title>
          <ListItem.Subtitle>8/21/2021</ListItem.Subtitle>
        </ListItem.Content>
        <Button title="Remove" color="red" onPress={() => {}}></Button>
      </ListItem>
    </View>
  );
};
const styles = StyleSheet.create({
  titleStyle: {fontWeight: 'bold', fontSize: 30},
});

export default ListAlarm;
