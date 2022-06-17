import React, { memo, useState, useCallback } from 'react';
import { View, Text, Platform } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { getHeightByPercent, scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts/index';
import TextInputHealer from '@components/TextInputHealer';
import SvgUser from '@svgs/SignIn/SvgUser';
import SvgLock from '@svgs/SignIn/SvgLock';
import SvgEmail from '@svgs/SignUp/SvgEmail';
import SvgLine from '@svgs/SignIn/SvgLine';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import SvgSmallHeart from '@svgs/ForgotPassword/SvgSmallHeart';
import ROUTES from '@ultis/routes';
import SvgSignUp from '@svgs/SignUp/SvgSignUp';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getStatusBarHeight } from '@ultis/StatusBar';
import { widthScreen } from '@ultis/dimensions';
import SvgPhone from '@svgs/MapsDoctors/SvgPhone';
import { Menu } from 'react-native-paper';
import SvgCall from '@svgs/SignIn/SvgCall';
import SvgNote from '@svgs/SignIn/SvgNote';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const ContactUs = memo(({ navigation }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [number, onChangeNumber] = useState('');

  // const onSignUp = useCallback(() => {
  //   navigation.navigate(ROUTES.Menu);
  // }, [navigation]);

  const _storeData = async data => {
    try {
      await AsyncStorage.setItem('user_id', JSON.stringify(data));
      console.log('user_id saved success');
    } catch (error) {
      console.log('Some error in setting user_id');
    }
  };
  const contact = () => {
    console.log(name,number, email,message);
    axios .post(`https://ezheal.ai/api/ApiCommonController/contact_us`,{
        name: name,
        number: number,
        email: email,
        message: message,
      })
       .then(function(response) {
       console.log(response.data);
       console.log(response.data);
        // if (response.data.msg === 'success' || response.data.msg == 'success') {
        //   ToastAndroid.show('Register Successfull....', ToastAndroid.SHORT);
        // }
        // console.log(response.data);

        if (response.data.data != null) {
          _storeData(response.data);
           navigation.navigate('Menu',{ screen: 'Menu' })
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
      <View style={styles.svgView} />
      <KeyboardAwareScrollView
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}>
        <SvgSmallHeart style={styles.svgHeart} color={colors.white} />
        <SvgSignUp style={styles.svg} />
        <View style={[styles.contentView]}>
          <Text style={styles.txtJoin}>Get in Touch!</Text>
          {/* <Text style={styles.txtVacation}>Vacation Home Rental Success</Text> */}
        <TextInput
        style={styles.txtInput2}
        svg={<SvgUser />}
        placeholder={'Name'}
        value={name} 
        blurOnSubmit={false}
        onChangeText={setName}
        />
          <TextInput
        style={styles.txtInput2}
        svg={<SvgUser />}
        placeholder={'Email'}
        value={email} 
        blurOnSubmit={false}
        onChangeText={setEmail}
        />
          <TextInput
        style={styles.txtInput2}
        svg={<SvgUser />}
        placeholder={'Phone No.'}
        value={number} 
        blurOnSubmit={false}
        onChangeText={onChangeNumber}
        />
          <TextInput
        style={styles.txtInput2}
        svg={<SvgUser />}
        placeholder={'Description'}
        value={message} 
        blurOnSubmit={false}
        onChangeText={setMessage}
        />
          <ButtonPrimary
             onPress={contact}
            style={styles.signUp}
            title={'Submit'}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
});

export default ContactUs;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  svgHeart: {
    top:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(14)
        : scaleHeight(14),
    left: scaleWidth(32),
  },
  svg: {
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? getStatusBarHeight() : scaleHeight(0),
    marginBottom: scaleHeight(-3),
  },
  signIn: {
    fontFamily: FONTS.HIND.semiBold,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    textTransform: 'uppercase',
    color: colors.white,
    position: 'absolute',
    top: scaleHeight(56),
    right: scaleWidth(21),
  },
  contentView: {
    backgroundColor: colors.white,
    borderTopRightRadius: scaleWidth(24),
    borderTopLeftRadius: scaleWidth(24),
    flex: 1,
  },
  txtJoin: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: scaleHeight(24),
    lineHeight: scaleHeight(32),
    color: colors.bluePrimary,
    marginLeft: scaleWidth(40),
    marginTop: scaleHeight(29),
  },
  txtVacation: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    marginLeft: scaleWidth(31),
    marginTop: scaleHeight(4),
  },
  txtInput1: {
    marginTop: scaleHeight(27),
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
  signUp: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(24),
  },
  txtOr: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    color: colors.dimGray,
  },
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + scaleHeight(24),
  },
  svgView: {
    backgroundColor: colors.green,
    position: 'absolute',
    width: widthScreen,
    height: getHeightByPercent(56),
  },
});
