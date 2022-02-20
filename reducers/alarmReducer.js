import {ADD_ALARM, DELETE_ALARM} from '../actions/index';
import moment from 'moment';
const initialState = {
  alarms: [],
};
const alarmReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALARM:
      moment.locale('en');
      console.log('time', state);
      const payload = action.payload;
      const time = moment(payload.data.value).format('hh:mm A');
      const date = moment(payload.data.value).format('d/m/YY');
      console.log(time);
      const alarm = {
        alarmNotificationData: payload,
        value: payload.data.value,
        time: time,
        date: date,
      };
      return {
        ...state,
        alarms: state.alarms.concat(alarm),
      };
    case DELETE_ALARM:
      return {
        ...state,
        alarms: state.alarms.filter(v => {
          return v.value !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default alarmReducer;
