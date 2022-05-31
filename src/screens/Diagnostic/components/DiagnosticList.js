import React, { memo, useCallback, useEffect, useState } from 'react';
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
import axios from 'axios';

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

  const [test,setTest] = useState([])

  const getTest = async () => {
    axios.get(`https://ezheal.ai/api/ApiCommonController/testlist`)
      .then(response => {
        //console.log(response.data.data)
        const test = response.data.data;
        setTest(test);
        console.log(test);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTest();

  }, []);

  return (
    
    <View style={styles.container}>
      
      <ScrollView>
      {test?.map((pcr) =>(
        <View
          style={styles.main}>
          <View style={styles.topView}>
            {/* {logoHospital} */}
            <Text style={styles.txtInsurance}>{pcr.test_name}</Text>
          </View>
          <Text style={styles.txtName}>{pcr.description}</Text>
          <Text style={styles.txtName}>{titleName}</Text>
          <View style={styles.btmView}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.price}>Price:</Text>
              <Text style={styles.txtEnrolleeID}>{pcr.price}</Text>
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
        ))}
        
      </ScrollView>
      
    </View>
  );
});
export default DiagnosticList;

const styles = ScaledSheet.create({
  container: {
    borderRadius: scaleWidth(15),
    marginHorizontal: scaleWidth(5),
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
    textTransform: 'uppercase',
  },
  topView: {
    alignItems: 'center',
    marginBottom: scaleHeight(20),
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
    marginBottom: getBottomSpace() + scaleHeight(15),
  },
  secondGrid: {
    marginTop: scaleHeight(12),
    backgroundColor: colors.white,
  },
  main:{
    backgroundColor: colors.white,
    marginBottom: scaleHeight(10),
  paddingTop: scaleHeight(22),
  }
});
