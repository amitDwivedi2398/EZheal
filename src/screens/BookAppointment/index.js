import React, { memo, useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import SvgVideo from '@svgs/SvgVideo';
import SvgMessage from '@svgs/SvgMessage';
import FONTS from '@ultis/fonts';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';
import ROUTES from '@ultis/routes';
import ButtonPrimary from '@components/ButtonPrimary';
import TimeBookItem from '@screens/BookAppointment/Components/TimeBookItem';
import SvgDoctorImg from '@svgs/BookAppointment/SvgDoctorImg';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import BookingStatus from '@screens/AppointmentStutas/BookingStatus';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = {
  imgDoctor: require('@assets/BookAppointment/Doctor.png'),
  doctorName: 'Alexander Wolfe',
};

const TIMEBOOKDATA = ['10:00 AM', '11:30 AM', '13:20 AM'];

const BookAppointment = memo(({ route, navigation }) => {
  const { id } = route.params;
  const dates = moment().format();
  const [bookAppointmentData, setBookAppointmentData] = useState(DATA);
  const [bookTimeData, setBookTimeData] = useState(TIMEBOOKDATA);
  const [dateSelect, setDateSelect] = useState(dates);
  const [active, setActive] = useState(1);
  const [oneDoctor, setOneDoctor] = useState({})


  const [date, setDate] = useState(new Date());
  const changeSelectedDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };



  const onChoose = useCallback((index) => {
    setActive(index);
  }, []);

  const onVideoCall = useCallback(() => {
    navigation.navigate(ROUTES.VideoCall);
  }, [navigation]);

  const onMessage = useCallback(() => {
    navigation.navigate(ROUTES.DoctorMessage);
  }, [navigation]);

  const Checkout = useCallback(() => {
    navigation.navigate(ROUTES.Checkout);
  }, [navigation]);

  const BookingStatus = useCallback(() => {
    navigation.navigate(ROUTES.BookingStatus);
  }, [navigation]);

  const onBookNow = useCallback(() => { }, []);

  const markedDay = {
    [dateSelect.dateString]: {
      selected: true,
      marked: true,
      dotColor: colors.blueAccent,
    },
  };

  LocaleConfig.locales.en = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  };
  LocaleConfig.defaultLocale = 'en';

  const getOneDoctor = async () => {
    axios.get(`https://ezheal.ai/api/ApiCommonController/doctorlistbyid/${id}`)
      .then(response => {
        //console.log(response.data.data)
        const oneDoctor = response.data.data;
        setOneDoctor(oneDoctor)
        console.log('@@@@', oneDoctor)
      }).catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    getOneDoctor()
  }, []);


  //  const [date,setDate] = useState('');
    const [time,setTime] = useState('');



  const appointment = async () => {
    console.log("$$$",date,time);
    axios
      .post(`https://ezheal.ai/api/ApiCommonController/doctorappointment`, {
      date:date,
      time:time,
      },{
        headers:{
          "user_token": await AsyncStorage.getItem("user_token")
        }
      })
       .then(response => {
       console.log('@@',response.data);       
      })
      .catch(error => {
        console.log(error.response.data);
      });
  };


  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
      <View style={styles.topview}>
        <TouchableOpacity
          onPress={onVideoCall}
          activeOpacity={0.6}
          style={styles.svgVideo}>
          <SvgVideo />
        </TouchableOpacity>
        <View style={styles.svgDoctorImg}>
          <SvgDoctorImg />
        </View>
        <TouchableOpacity
          onPress={onMessage}
          activeOpacity={0.6}
          style={styles.svgMessage}>
          <SvgMessage />
        </TouchableOpacity>
      </View>
      <Text style={styles.doctorName}>{oneDoctor?.clinician_name}</Text>
      <Calendar
        style={styles.calendarView}
        firstDay={1}
        testID="dateTimePicker"
        value={date}
        is24Hour={true}
        display="default"
        onChange={changeSelectedDate}
        startFromMonday={true}
        current={dates}
        headerStyle={styles.headerStyle}
        markedDates={markedDay}
        onDayPress={(dateChose) => setDateSelect(dateChose)}
        theme={{
          arrowColor: '#FFF',
          'stylesheet.calendar.header': {
            week: {
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: scaleWidth(16),
              marginBottom: scaleHeight(8),
            },
            dayHeader: {
              color: colors.white,
              fontFamily: FONTS.HIND.SemiBold,
              fontSize: scaleHeight(14),
              textAlign: 'center',
            },
          },
          calendarBackground: colors.white,
          selectedDayBackgroundColor: colors.blue,
          textDayFontFamily: FONTS.HIND.Regular,
          textDayFontSize: scaleHeight(12),
          textMonthFontFamily: FONTS.HIND.Regular,
          textMonthFontWeight: '500',
          textMonthFontSize: scaleHeight(18),
          textDayHeaderFontFamily: FONTS.HIND.Regular,
          textDayHeaderFontSize: scaleHeight(12),
          monthTextColor: colors.white,
          dayTextColor: colors.black2,
          todayTextColor: colors.blue,
          textDisabledColor: '#C8C8C8',
          selectedDayTextColor: colors.white,
        }}
      />
      <View style={styles.timeView}>
      <TouchableOpacity
      value={time}
      onChangeText={setTime}
      activeOpacity={0.6}
      style={styles.timetab}>
      <Text style={styles.txtTime}>'10:00 AM'</Text>
    </TouchableOpacity>
        {/* {bookTimeData.map((item, index) => {
          return (
            <TimeBookItem
              active={active}
              onChoose={onChoose}
              key={index}
              id={index}
              time={item}
              value={time}
              onChangeText={setTime}
            />
          );
        })} */}
      </View>
      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => {
          appointment(time, date);
        }}>
        <Text style={styles.txt}>
          Submit
        </Text>
      </TouchableOpacity>
      {/* <ButtonPrimary
        style={styles.buttonPrimary}
        onPress={appointment}
        title={'Book Now'}
      /> */}
    </ScrollView>
  );
});
export default BookAppointment;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  topview: {
    flexDirection: 'row',
    marginTop: scaleHeight(32),
    marginHorizontal: scaleWidth(44),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  svgVideo: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgMessage: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(16),
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgDoctorImg: {
    width: scaleWidth(120),
    height: scaleWidth(120),
    borderRadius: scaleWidth(60),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  doctorName: {
    textAlign: 'center',
    marginTop: scaleHeight(10),
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: colors.bluePrimary,
    marginBottom: scaleHeight(22),
  },
  calendarView: {
    marginHorizontal: scaleWidth(16),
    borderRadius: scaleWidth(6),
    overflow: 'hidden',
  },
  headerStyle: {
    backgroundColor: colors.blue,
    marginHorizontal: scaleWidth(-6),
  },
  buttonPrimary: {
    width: scaleWidth(295),
    height: scaleHeight(48),
    backgroundColor: colors.classicBlue,
    marginTop: scaleHeight(25),
    justifyContent: 'center',
    shadowOpacity: 10,
    elevation: 10,
    borderRadius: scaleHeight(24),
    alignSelf: 'center'
  },
  txt: {
    fontFamily: FONTS.HIND.Bold,
    fontSize: scaleHeight(16),
    textTransform: 'uppercase',
    color: colors.white,
    alignSelf: 'center'
  },
  timeView: {
    flexDirection: 'row',
    marginTop: scaleHeight(16),
    marginHorizontal: scaleWidth(16),
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
  timetab:{
    paddingHorizontal: scaleHeight(20),
    paddingTop: scaleHeight(12),
    paddingBottom: scaleHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaleWidth(16),
    borderRadius: scaleWidth(8),
    width: scaleWidth(104),
    backgroundColor:colors.blue
  },
  txtTime: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
  },
});
