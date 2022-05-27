import React, { memo, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import SvgArrowRight from '@svgs/Insurance/SvgArrowRight';
import Cart from '@screens/Cart';
import { useNavigation } from '@react-navigation/native';
import ROUTES from '@ultis/routes';

interface Props {
  logoHospital?: any;
  insurance?: string;
  name?: string;
  addresh?: string;
  price?: string;
  enrolleeID?: string;
  expDate?: string;
  onPress?: any;
}

const LabName = memo((props: Props) => {
  const {
    logoHospital,
    insurance,
    name,
    addresh,
    price,
    enrolleeID,
    expDate,
    onPress,
  } = props;

  const navigation = useNavigation();

  const Cart = useCallback(() => {
    navigation.navigate(ROUTES.Cart);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        {logoHospital}
        <Text style={styles.txtInsurance}>{insurance}</Text>
      </View>
      <Text style={styles.txtName}>{name}</Text>
      <Text style={styles.txtprice}>{price}</Text>
      <Text style={styles.txtAddresh}>{addresh}</Text>
      <View style={styles.btmView}>
        <View>
          <Text style={styles.enrolleeID}>Order ID</Text>
          <Text style={styles.txtEnrolleeID}>{enrolleeID}</Text>
        </View>
        <View>
          <Text style={styles.expDate}>Date</Text>
          <Text style={styles.txtExpDate}>{expDate}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={Cart} style={styles.viewButton}>
        <SvgArrowRight />
      </TouchableOpacity>
    </View>
  );
});
export default LabName;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: scaleHeight(20),
    paddingHorizontal: scaleWidth(24),
    borderRadius: scaleWidth(8),
    marginHorizontal: scaleWidth(16),
    marginBottom: scaleHeight(16),
    paddingBottom: scaleHeight(18),
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaleHeight(24),
  },
  txtName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(32),
    lineHeight: scaleHeight(48),
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
  btmView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  enrolleeID: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(12),
    lineHeight: scaleHeight(16),
    color: colors.silverChalice,
  },
  txtEnrolleeID: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(20),
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
});
