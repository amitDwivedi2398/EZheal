import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import SvgArrowRight from '@svgs/Insurance/SvgArrowRight';
import SvgCalendar from '@svgs/MainPage/SvgCalendar';
import { Button } from 'react-native-paper';
import SvgAdd from '@svgs/SvgAdd';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { ScrollView } from 'react-native-gesture-handler';
import Cart from '@screens/Cart';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '@ultis/routes';

interface Props {
  logoHospital?: any;
  testName?: string;
  name?: string;
  titleName?: string;
  price?: string;
  expDate?: string;
  onPress?: any;
}

const DiagnosticList = memo((props: Props) => {
  const {
    logoHospital,
    testName,
    name,
    titleName,
    price,
    expDate,
    onPress,
  } = props;

  const navigation = useNavigation();

  const Cart = useCallback(() => {
    navigation.navigate(ROUTES.Cart);
  }, [navigation]);

  const LabList = useCallback(() => {
    navigation.navigate(ROUTES.LabList);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: colors.white,
          }}>
          <View style={styles.topView}>
            {/* {logoHospital} */}
            <Text style={styles.txtInsurance}>{testName}</Text>
          </View>
          <Text style={styles.txtName}>{name}</Text>
          <Text style={styles.txtName}>{titleName}</Text>
          <View style={styles.btmView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.price}>Price:</Text>
              <Text style={styles.txtEnrolleeID}>{price}</Text>
            </View>
            <View>
              {/* <Text style={styles.expDate}>Date</Text>
          <Text style={styles.txtExpDate}>{expDate}</Text> */}
              <ButtonPrimary
                 onPress={LabList}
                title={'ADD'}
                style={styles.buttonPrimary}
              />
            </View>
          </View>
          {/* <TouchableOpacity onPress={onPress} style={styles.viewButton}>
          <SvgAdd />
        </TouchableOpacity> */}
        </View>
        <View style={styles.secondGrid}>
          <View style={styles.topView}>
            {/* {logoHospital} */}
            <Text style={styles.txtInsurance}>{testName}</Text>
          </View>
          <Text style={styles.txtName}>{name}</Text>
          <Text style={styles.txtName}>{titleName}</Text>
          <View style={styles.btmView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.price}>Price:</Text>
              <Text style={styles.txtEnrolleeID}>{price}</Text>
            </View>
            <View>
              {/* <Text style={styles.expDate}>Date</Text>
          <Text style={styles.txtExpDate}>{expDate}</Text> */}
              <ButtonPrimary
                 onPress={LabList}
                title={'ADD'}
                style={styles.buttonPrimary}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
});
export default DiagnosticList;

const styles = ScaledSheet.create({
  container: {
    paddingTop: scaleHeight(20),
    // paddingHorizontal: scaleWidth(24),
    borderRadius: scaleWidth(15),
    marginHorizontal: scaleWidth(5),
    marginBottom: scaleHeight(16),
    paddingBottom: scaleHeight(22),
    width: scaleWidth(180),
    flexDirection: 'column',
  },
  txtInsurance: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    fontWeight: '500',
    marginLeft: scaleWidth(12),
    marginTop: scaleHeight(4),
    textTransform: 'uppercase',
  },
  topView: {
    alignItems: 'center',
    marginBottom: scaleHeight(24),
  },
  txtName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(15),
    lineHeight: scaleHeight(20),
    color: colors.semiBlack,
    marginBottom: scaleHeight(10),
    textAlign: 'center',
  },
  txtprice: {
    textAlign: 'center',
    fontSize: scaleHeight(32),
    fontFamily: FONTS.HIND.Regular,
  },
  txtAddresh: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(20),
    lineHeight: scaleHeight(30),
    color: colors.semiBlack,
    marginBottom: scaleHeight(10),
    textAlign: 'center',
  },
  btmView: {},
  price: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '800',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(22),
    color: colors.semiBlack,
  },
  txtEnrolleeID: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '800',
    fontSize: scaleHeight(20),
    lineHeight: scaleHeight(25),
    color: colors.semiBlack,
    marginTop: scaleHeight(2),
  },
  expDate: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: colors.silverChalice,
  },
  txtExpDate: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
    color: colors.semiBlack,
    marginTop: scaleHeight(2),
  },
  viewButton: {
    width: scaleWidth(32),
    height: scaleWidth(32),
    borderRadius: scaleWidth(32),
    backgroundColor: colors.classicBlue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: scaleHeight(16),
    right: scaleWidth(24),
  },
  buttonPrimary: {
    width: scaleWidth(140),
    height: scaleHeight(40),
    alignSelf: 'center',
    marginBottom: getBottomSpace() + scaleHeight(8),
  },
  secondGrid: {
    marginTop: scaleHeight(12),
    backgroundColor: colors.white,
  },
});
