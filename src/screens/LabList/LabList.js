import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import SvgLogo from '@svgs/Insurance/SvgLogo';
import { scaleHeight, scaleWidth } from '@ultis/size';
import keyExtractor from '@ultis/keyExtractor';
import InsuranceItem from '@screens/Insurance/components/InsuranceItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import LabName from './components/LabName';
import { Searchbar } from 'react-native-paper';

const INSURANCEDATA = [
  {
    logoHospital: <SvgLogo />,
    insurance: 'Lab Name',
    name: 'Test Name',
    price: '₹500',
    addresh: '80,Behind C21 Mall, Scheme 54 PU4,Indore',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    insurance: 'Lab Name',
    name: 'Test Name',
    price: '₹500',
    addresh: '80,Behind C21 Mall, Scheme 54 PU4,Indore',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
];

const LabList = memo(() => {
  const [insuranceData, setInsuranceData] = useState(INSURANCEDATA);

  const renderItem = useCallback(({ item }) => {
    const {
      logoHospital,
      insurance,
      name,
      addresh,
      price,
      enrolleeID,
      expDate,
    } = item;

    const onPress = () => {};

    return (
      <LabName
        logoHospital={logoHospital}
        insurance={insurance}
        name={name}
        addresh={addresh}
        price={price}
        enrolleeID={enrolleeID}
        expDate={expDate}
        onPress={onPress}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
         <View style={styles.search}>
            <Searchbar
      placeholder="Search"
    /></View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={insuranceData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});
export default LabList;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop:
      Platform.OS === 'ios'
        ? getStatusBarHeight() + scaleHeight(50)
        : scaleHeight(10),
    paddingBottom: scaleHeight(84),
  },
  search:{
    paddingTop:
    Platform.OS === 'ios'
      ? getStatusBarHeight() + scaleHeight(50)
      : scaleHeight(10),
      width:scaleWidth(350),
      justifyContent: 'center',
        alignSelf: 'center',
  }
});
