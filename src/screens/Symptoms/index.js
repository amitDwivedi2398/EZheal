import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import keyExtractor from '@ultis/keyExtractor';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { scaleHeight } from '@ultis/size';
import DrugItem from '@screens/ListDrugs/components/DrugItem';
import SvgDrug from '@svgs/ListDrugs/SvgDrug';
import SvgAspirin from '@svgs/ListDrugs/SvgAspirin';
import ROUTES from '@ultis/routes';
import SvgPsychologit from '@svgs/Symptoms/SvgPsychologit';
import SvgNutritionist from '@svgs/Symptoms/SvgNutritionist';
import SymptomsList from './components/SymptomsList';

const LISTDRUGSDATA = [
  {
    Svg: <SvgPsychologit />,
    drugName: 'Neuro Physician',
    concentration: 'Specialities Most Relevant to you',
  },
  {
    Svg: <SvgPsychologit />,
    drugName: 'Spine Surgeon',
    concentration: 'Specialities Most Relevant to you',
  },
  {
    Svg: <SvgNutritionist />,
    drugName: 'Ortho Surgeon',
    concentration: 'Specialities Most Relevant to you',
  },
  {
    Svg: <SvgPsychologit />,
    drugName: 'Ortho Physician',
    concentration: 'Specialities Most Relevant to you',
  },
  {
    Svg: <SvgPsychologit />,
    drugName: 'General Physician',
    concentration: 'Specialities Most Relevant to you',
  },
  //   {
  //     Svg: <SvgAspirin />,
  //     drugName: 'Aspirin',
  //     concentration: '10mg/piece',
  //   },
  //   {
  //     Svg: <SvgDrug />,
  //     drugName: 'Aspirin',
  //     concentration: '10mg/piece',
  //   },
  //   {
  //     Svg: <SvgAspirin />,
  //     drugName: 'Aspirin',
  //     concentration: '10mg/piece',
  //   },
  //   {
  //     Svg: <SvgDrug />,
  //     drugName: 'Aspirin',
  //     concentration: '10mg/piece',
  //   },
  //   {
  //     Svg: <SvgAspirin />,
  //     drugName: 'Aspirin',
  //     concentration: '10mg/piece',
  //   },
  //   {
  //     Svg: <SvgDrug />,
  //     drugName: 'Aspirin',
  //     concentration: '10mg/piece',
  //   },
  //   {
  //     Svg: <SvgAspirin />,
  //     drugName: 'Aspirin',
  //     concentration: '10mg/piece',
  //   },
  //   {
  //     Svg: <SvgDrug />,
  //     drugName: 'Aspirin',
  //     concentration: '10mg/piece',
  //   },
];

const Symptoms = memo(({ navigation }) => {
  const [drugData, setDrugData] = useState(LISTDRUGSDATA);

  const onDrugDetails = useCallback(() => {
    navigation.navigate(ROUTES.DrugDetails);
  }, [navigation]);

  const onAppointment = useCallback(() => {
    navigation.navigate(ROUTES.AppointmentList);
  }, [navigation]);

  const onFindDoctor = useCallback(() => {
    navigation.navigate(ROUTES.FindDoctors);
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }) => {
      const { Svg, drugName, concentration } = item;

      return (
        <SymptomsList
          Svg={Svg}
          drugName={drugName}
          concentration={concentration}
          onPress={onFindDoctor}
          //   onPress={onDrugDetails}
          // onPress={onAppointment}
        />
      );
    },
    [onDrugDetails],
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={drugData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});
export default Symptoms;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(24),
    paddingBottom: getBottomSpace(),
  },
});
