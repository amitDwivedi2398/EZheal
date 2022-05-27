import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import SvgLogo from '@svgs/Insurance/SvgLogo';
import { scaleHeight } from '@ultis/size';
import keyExtractor from '@ultis/keyExtractor';
import InsuranceItem from '@screens/Insurance/components/InsuranceItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import DiagnosticList from './components/DiagnosticList';

const INSURANCEDATA = [
  {
    logoHospital: <SvgLogo />,
    testName: 'Covid RT-PCR',
    name: 'Known as Covid-19 Virus Qualitative Pcr',
    titleName: 'E-Report on next day',
    price: '₹500',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    testName: 'Covid RT-PCR',
    name: 'Known as Covid-19 Virus Qualitative Pcr',
    titleName: 'E-Report on next day',
    price: '₹500',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    testName: 'Covid RT-PCR',
    name: 'Known as Covid-19 Virus Qualitative Pcr',
    titleName: 'E-Report on next day',
    price: '₹500',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    testName: 'Covid RT-PCR',
    name: 'Known as Covid-19 Virus Qualitative Pcr',
    titleName: 'E-Report on next day',
    price: '₹500',
    expDate: '16-2025',
  },
];

const Diagnostic = memo(({navigation}) => {
  const [insuranceData, setInsuranceData] = useState(INSURANCEDATA);

  const renderItem = useCallback(({ item }) => {
    const { logoHospital, testName, name, titleName, price, expDate } = item;

    const onPress = () => {};

    return (
      <DiagnosticList
        logoHospital={logoHospital}
        testName={testName}
        name={name}
        titleName={titleName}
        price={price}
        expDate={expDate}
        onPress={onPress}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
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
export default Diagnostic;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(24),
    paddingBottom: getBottomSpace(),
    flexDirection: 'row',
  },
});
