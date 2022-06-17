import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Keyboard, Platform,Image,TextInput,ToastAndroid } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import SvgHeart from '@svgs/SignIn/SvgHeart';
import FONTS from '@ultis/fonts/index';
import SvgUser from '@svgs/SignIn/SvgUser';
import SvgLock from '@svgs/SignIn/SvgLock';
import SvgFaceID from '@svgs/SignIn/SvgFaceID';
import SvgLine from '@svgs/SignIn/SvgLine';
import ROUTES from '@ultis/routes';
import ButtonPrimary from '@components/ButtonPrimary';
import TextInputHealer from '@components/TextInputHealer';
import { scaleHeight, scaleWidth } from '@ultis/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getStatusBarHeight } from '@ultis/StatusBar';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = memo(({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [storeddata, setStoreddata] = useState('');
  const [show, setShow] = useState(true);
  const refInput1 = useRef(null);
  const refInput2 = useRef(null);

 

  function showToast() {
    ToastAndroid.show('Wrong Email or Password', ToastAndroid.SHORT);
  }

  const onSignUp = useCallback(() => {
    navigation.navigate(ROUTES.SignUp);
  }, [navigation]);

  const onForgotPassword = useCallback(() => {
    navigation.navigate(ROUTES.ForgotPassword);
  }, [navigation]);

  const onCreateAccount = useCallback(() => {
    navigation.navigate(ROUTES.CreatAccount);
  }, [navigation]);

  const onUpdate = useCallback(() => {
    navigation.navigate(ROUTES.MainBottomTab);
  }, [navigation]);

  const onPress = useCallback(() => {}, []);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, []);

  const keyboardDidShow = () => {
    setShow(false);
  };

  const keyboardDidHide = () => {
    setShow(true);
  };
  // logIn api//
  const _storeData = async token => {
    try {
      await AsyncStorage.setItem('token', JSON.stringify(token));
      console.log('token saved success');
    } catch (error) {
      console.log('Some error in setting token');
    }
  };
  const getData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        console.log('success');
        console.log(token);
        setStoreddata(token);
        navigation.replace('CreatAccount',{ screen: 'CreatAccount' })
      }
    } catch (e) {
      console.log('no Value in login');
    }
  };
  useEffect(() => {
    getData();
  }, [storeddata]);

  const postUser = () =>{
    axios.post("https://ezheal.ai/api/ApiCommonController/patient_loginbypassword",{
          email:email,
          password:password
    })
    .then(function(response){
      console.log(response.data);
      console.log(response.data);
      if (response.data.msg === 'success' || response.data.msg == 'success') {
        ToastAndroid.show('Login Successfull....', ToastAndroid.SHORT);
      }
      console.log(response.data);

         if (response.data != null) {
          _storeData(response.data);
          
          navigation.replace('MainBottomTab',{ screen: 'MainPage' })
        } else {
          console.log('no data!');  
        }
    })
    .catch(function(error){
      console.log("error",error);
      if (
        error.response.data.msg == 'User Doesnot Exist' ||
        error.response.data.msg === 'User Doesnot Exist'
      ) {
        showToast();
      }
    });
  };
  

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}>
          <Image style={styles.svgHeart} source={require('../../assets/logo/ezheal_icon.png')} />
        {/* <SvgHeart style={styles.svgHeart} /> */}
        <Text style={styles.txtWelcome}>Welcome to EZscan</Text>
        {/* <TextInputHealer
          inputRef={refInput1}
          svg={<SvgUser />}
          placeholder={'Username/Phonenumber'}
          value={userName}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            refInput2.current.focus();
          }}
          blurOnSubmit={false}
        /> */}
        <TextInput
        inputRef={refInput1}
        style={styles.txtInput2}
        svg={<SvgUser />}
        placeholder={'Email'}
        value={email} 
        blurOnSubmit={false}
        onChangeText={setEmail}
        />
         
        {/* <TextInputHealer
          inputRef={refInput2}
          style={styles.txtInput2}
          svg={<SvgLock />}
          placeholder={'Password'}
          secure={true}
          value={password}
        /> */}
        <TextInput 
        inputRef={refInput2}
        style={styles.txtInput2}
        svg={<SvgLock />}
        placeholder={'Password'}
        secure={true}
        value={password}
        onChangeText={setPassword}
        />
        
        <View style={styles.signInView}>
        <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              postUser(email, password);
            }}>
            <Text style={styles.txt}>
              Submit
            </Text>
          </TouchableOpacity>
          <View>
          {/* <Text>
            {storeddata}
            <storeddata />
          </Text> */}
        </View>
          {/* <ButtonPrimary
            onPress={postUser}
            style={styles.signIn}
            title={'Sign In'}
          /> */}
          <TouchableOpacity style={styles.viewFaceId}>
            <SvgFaceID />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={onForgotPassword}
          style={styles.forgotPasswordView}>
          <Text style={styles.txtForgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        <View style={styles.lineView}>
          <SvgLine />
          <Text style={styles.txtOr}>or</Text>
          <SvgLine />
        </View>
        <ButtonPrimary
          onPress={onPress}
          style={styles.facebook}
          title={'Sign In With Facebook'}
        />
        <ButtonPrimary
          onPress={onPress}
          style={styles.google}
          title={'Sign In With Google'}
        />
      </KeyboardAwareScrollView>
      {show && (
        <TouchableOpacity onPress={onSignUp} style={styles.SignUpView}>
          <Text style={styles.txtSignUp}>Don’t Have Account? Sign UP</Text>
        </TouchableOpacity>
      )}
    </View>
  );
});

export default SignIn;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  svgHeart: {
    width:scaleWidth(50),
    height:scaleHeight(50),
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(32)
        : scaleHeight(32),
    left: scaleWidth(40),
  },
  txtWelcome: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(32),
    lineHeight: scaleHeight(48),
    color: colors.semiBlack,
    marginTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(60)
        : scaleHeight(60),
    marginLeft: scaleWidth(40),
    marginBottom: scaleHeight(30),
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
  signIn: {
    width: scaleWidth(221),
    height: scaleHeight(48),
    backgroundColor: colors.classicBlue,
    marginTop: scaleHeight(25),
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 10,
    elevation: 10,
    borderRadius:scaleHeight(24) ,
  },
  txt:{
    fontFamily: FONTS.HIND.Bold,
    fontSize: scaleHeight(16),
    textTransform: 'uppercase',
    color: colors.white,
  },
  viewFaceId: {
    width: scaleWidth(48),
    height: scaleHeight(48),
    borderRadius: scaleHeight(16),
    backgroundColor: colors.secondBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleHeight(25),
  },
  signInView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: scaleWidth(45),
    marginRight: scaleWidth(40),
  },
  forgotPasswordView: {
    marginTop: scaleHeight(20),
    alignSelf: 'center',
    width: scaleWidth(200),
    height: scaleHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtForgotPassword: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    color: colors.classicBlue,
    textTransform: 'uppercase',
  },
  txtOr: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    color: colors.dimGray,
  },
  lineView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: scaleWidth(40),
    alignItems: 'center',
    marginTop: scaleHeight(25),
  },
  facebook: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(15),
  },
  google: {
    width: scaleWidth(295),
    backgroundColor: colors.secondRed,
    alignSelf: 'center',
    marginTop: scaleHeight(24),
  },
  SignUpView: {
    position: 'absolute',
    alignSelf: 'center',
    width: scaleWidth(200),
    height: scaleHeight(30),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: getBottomSpace() + scaleHeight(8),
  },
  txtSignUp: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(12),
    color: colors.classicBlue,
    textTransform: 'uppercase',
  },
});
