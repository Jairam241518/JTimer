import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import moment, {now} from 'moment';
import TimerComponent from './TimerComponent';
import ListAlarm from './AlarmComponents/ListAlarm';
import TimePicker from './AlarmComponents/TimePicker';

// const DATA = {
//   timer: 1234567,
//   laps: [12345, 2345, 34567, 98765],
// };
const DATA = {
  start: 0,
  now: 0,
  laps: [],
};
const timer = DATA.now - DATA.start;

function StopWatchTimer({interval, style}) {
  const duration = moment.duration(interval);
  const centiSeconds = Math.floor(duration.milliseconds() / 10);
  return (
    <Text style={style}>
      {duration.minutes()}:{duration.seconds()}:{centiSeconds}
    </Text>
  );
}
function RoundButton({title, color, background, disabled}) {
  return (
    <TouchableOpacity
      onPress={() => {
        !disabled;
      }}
      style={[styles.button, {backgroundColor: background}]}
      activeOpacity={disabled ? 1 : 0.7}>
      <View style={styles.buttonBorder}>
        <Text style={[styles.buttonTitle, {color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

function StopWatch() {
  return (
    <View style={styles.container}>
      <StopWatchTimer interval={timer} style={styles.timer} />
      <ButtonsRow>
        <RoundButton title="Start" color="#50D167" background="#1B361F" />
        <RoundButton title="Reset" color="#FFFFFF" background="#3D3D3D" />
      </ButtonsRow>
      <LapsTable laps={DATA.laps} />
    </View>
  );
}

function Timer() {
  return <TimerComponent />;
}

function Alarm() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={styles.heading}>Alarm</Text>
      <SafeAreaView style={styles.listAlarms}>
        <ListAlarm />
      </SafeAreaView>
      <View style={styles.timePicker}>
        <TimePicker />
      </View>
    </View>
  );
}

function ButtonsRow({children}) {
  return <View style={styles.buttonsRow}>{children}</View>;
}

function Lap({number, interval}) {
  return (
    <View style={styles.lap}>
      <Text style={styles.lapText}>Lap {number}</Text>
      <StopWatchTimer style={styles.lapText} interval={interval} />
    </View>
  );
}

function LapsTable({laps}) {
  return (
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index) => (
        <Lap
          number={laps.length - index}
          key={laps.length - index}
          interval={lap}
        />
      ))}
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Timer"
          component={Timer}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/timer.png')}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />

        <Tab.Screen
          name="StopWatch"
          component={StopWatch}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/sand-clock.png')}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Alarm"
          component={Alarm}
          options={{
            tabBarIcon: () => (
              <Image
                source={require('./assets/alarm.png')}
                style={{width: 20, height: 20}}
              />
            ),
          }}
        />
        {/* <Tab.Screen name="Alarm" component={SettingsScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  timer: {
    color: '#FFFFFF',
    fontSize: 76,
    fontWeight: '200',
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 18,
  },
  buttonBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsRow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
  },
  lapText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#151515',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  scrollView: {
    alignSelf: 'stretch',
  },
  heading: {
    fontSize: 20,
    padding: 20,
  },
  timePicker: {
    paddingTop: '10%',
    width: '50%',
    bottom: 20,
  },
  listAlarms: {
    flex: 1,
    width: '100%',
  },
});

export default App;
