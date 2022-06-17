import React, { memo, useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import { widthScreen } from '@ultis/dimensions';
import SvgSmallHeart from '@svgs/ForgotPassword/SvgSmallHeart';
import SvgAdd from '@svgs/CreateAccount/SvgAdd';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';
import ButtonPrimary from '@components/ButtonPrimary';
import InputButton from '@screens/CreateAccount/components/InputButton';
import ROUTES from '@ultis/routes';
import SvgAvatar from '@svgs/CreateAccount/SvgAvatar';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateAccount = memo(({ navigation }) => {
  const [name,setName] = useState('');
  const [gender,setGender] = useState('');
  const [birthday,setBirthday] = useState('');
  const [blood,setBlood] = useState('');
  const [weight,setWeight] = useState('');
  const [height,setHeight] = useState('');
  const [mobile_no, setMobile] = useState('');
  const [storeddata, setStoreddata] = useState('');
  const onSkip = useCallback(() => {
    navigation.navigate(ROUTES.MainBottomTab);
  }, [navigation]);

  const onFullName = useCallback(() => {
    navigation.navigate(ROUTES.FullName);
  }, [navigation]);

  const onGender = useCallback(() => {
    navigation.navigate(ROUTES.Gender);
  }, [navigation]);

  const onBirthDay = useCallback(() => {
    navigation.navigate(ROUTES.BirthDay);
  }, [navigation]);

  const onBlood = useCallback(() => {
    navigation.navigate(ROUTES.Blood);
  }, [navigation]);

  const onWeight = useCallback(() => {
    navigation.navigate(ROUTES.Weight);
  }, [navigation]);

  const onHeight = useCallback(() => {
    navigation.navigate(ROUTES.Height);
  }, [navigation]);

  const onUpdate = useCallback(() => {
    navigation.navigate(ROUTES.MainBottomTab);
  }, [navigation]);

  // api

  const _storeData = async token => {
    try {
      await AsyncStorage.setItem('token', JSON.stringify(token));
      console.log('token saved success');
    } catch (error) {
      console.log('Some error in setting token');
    }
  };
  const account = () => {
    console.log(name,gender,birthday,blood,weight,height,mobile_no);
    axios
      .post(`https://ezheal.ai/api/ApiCommonController/profileuser`, {
        name:name,
        gender:gender,
        birthday:birthday,
        blood:blood,
        weight:weight,
        height:height,
        mobile_no: mobile_no,
      })
       .then(function(response) {
       console.log(response.data);
       console.log(response.data);
        if (response.data.msg === 'success' || response.data.msg == 'success') {
          ToastAndroid.show('Register Successfull....', ToastAndroid.SHORT);
        }
        console.log(response.data);

        if (response.data != null) {
          _storeData(response.data);
          navigation.replace('MainBottomTab',{ screen: 'MainPage' })
        } else {
          console.log('no data!');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <SvgSmallHeart color={colors.white} /> */}
        <Image style={styles.svgHeart} source={require('../../assets/logo/ezheal_icon.png')} />
        <Text style={styles.txtCreateAccount}>Create Account</Text>
        <TouchableOpacity
          onPress={onSkip}
          activeOpacity={0.6}
          style={styles.skipView}>
          <Text style={styles.txtSkip}>Skip!</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}>
        {/* <InputButton onPress={onFullName} title={'Fullname'} /> */}
        <TextInput
        style={styles.txtInput2}
        placeholder={'Fullname'}
        value={name} 
        blurOnSubmit={false}
        onChangeText={setName}
        />
        {/* <InputButton style={styles.input} onPress={onGender} title={'Gender'} /> */}
        <TextInput
        style={styles.txtInput2}
        placeholder={'Gender'}
        value={gender} 
        blurOnSubmit={false}
        onChangeText={setGender}
        />
        {/* <InputButton
          style={styles.input}
          onPress={onBirthDay}
          title={'Birthday'}
        /> */}
         <TextInput
        style={styles.txtInput2}
        placeholder={'Birthday'}
        value={birthday} 
        blurOnSubmit={false}
        onChangeText={setBirthday}
        />
        {/* <InputButton style={styles.input} onPress={onBlood} title={'Blood'} /> */}
        <TextInput
        style={styles.txtInput2}
        placeholder={'Blood'}
        value={blood} 
        blurOnSubmit={false}
        onChangeText={setBlood}
        />
        {/* <InputButton style={styles.input} onPress={onWeight} title={'Weight'} /> */}
        <TextInput
        style={styles.txtInput2}
        placeholder={'Weight'}
        value={weight} 
        blurOnSubmit={false}
        onChangeText={setWeight}
        />
        {/* <InputButton style={styles.input} onPress={onHeight} title={'Height'} /> */}
        <TextInput
        style={styles.txtInput2}
        placeholder={'Height'}
        value={height} 
        blurOnSubmit={false}
        onChangeText={setHeight}
        />
        <TextInput
        style={styles.txtInput2}
        placeholder={'Mobile No'}
        value={mobile_no} 
        blurOnSubmit={false}
        onChangeText={setMobile}
        />
        {/* <ButtonPrimary
          style={styles.buttonPrimacy}
          title={'Update'}
          onPress={onUpdate}
        /> */}
        <TouchableOpacity
            style={styles.buttonPrimacy}
            onPress={() => {
              account(name,gender,birthday,blood,weight,height,mobile_no);
            }}>
            <Text style={styles.txt}>
              Submit
            </Text>
          </TouchableOpacity>
      </ScrollView>
      <View style={styles.avatar}>
        <SvgAvatar />
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.addView}>
        <SvgAdd />
      </TouchableOpacity>
    </View>
  );
});

export default CreateAccount;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    width: widthScreen,
    flexDirection: 'row',
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(12)
        : scaleHeight(12),
    paddingBottom: scaleHeight(85),
    paddingLeft: scaleWidth(16),
    paddingRight: scaleWidth(24),
    alignItems: 'center',
    backgroundColor: colors.secondBlue,
    borderBottomRightRadius: scaleHeight(24),
    borderBottomLeftRadius: scaleHeight(24),
    justifyContent: 'space-between',
  },
  txtSkip: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    color: colors.white,
    textTransform: 'uppercase',
  },
  skipView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleWidth(48),
    height: scaleHeight(48),
  },
  txtCreateAccount: {
    fontFamily: FONTS.HIND.Regular,
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    color: colors.white,
  },
  avatar: {
    width: scaleWidth(80),
    height: scaleWidth(80),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(100)
        : scaleHeight(124),
    borderWidth: scaleWidth(2),
    borderRadius: scaleWidth(40),
    borderColor: colors.white,
    shadowOffset: { height: 0, width: 4 },
    shadowRadius: 4,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOpacity: 0.25,
    backgroundColor: colors.white,
  },
  addView: {
    backgroundColor: colors.oldBurgundy,
    height: scaleHeight(32),
    width: scaleHeight(32),
    borderRadius: scaleHeight(16),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: scaleHeight(183),
    right: scaleWidth(150),
  },
  input: {
    marginTop: scaleHeight(24),
  },
  buttonView: {
    position: 'absolute',
    paddingBottom: getBottomSpace() + scaleHeight(24),
    width: widthScreen,
    bottom: 0,
    alignItems: 'center',
    paddingTop: scaleHeight(12),
    backgroundColor: colors.white,
  },
  buttonPrimacy: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(69),
    height: scaleHeight(48),
    backgroundColor: colors.classicBlue,
    justifyContent: 'center',
    shadowOpacity: 10,
    elevation: 10,
    borderRadius:scaleHeight(24) ,
    alignItems:'center',
  },
  txt:{
    fontFamily: FONTS.HIND.Bold,
    fontSize: scaleHeight(16),
    textTransform: 'uppercase',
    color: colors.white,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(71),
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
  svgHeart:{
    width:scaleWidth(50),
    height:scaleHeight(50)
  },
  txtInput2: {
    marginTop: scaleHeight(25),
    flex: 1,
    height: '100%',
    width: '100%',
    marginLeft: scaleWidth(16),
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    color: colors.semiBlack,
    width: scaleWidth(295),
    height: scaleHeight(48),
    backgroundColor: colors.frame,
    borderRadius: scaleHeight(24),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
