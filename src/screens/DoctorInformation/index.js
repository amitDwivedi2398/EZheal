import React, { memo, useCallback, useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import InformationItem from '@screens/DoctorInformation/components/InformationItem';
import keyExtractor from '@ultis/keyExtractor';
import { scaleHeight } from '@ultis/size';
import axios from 'axios';

const INFORMATIONDATA = [
  {
    title: 'About',
    descriptions: [
      'If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping',
    ],
  },
  // {
  //   address: 'Address & Timing',
  //   descriptions: [
  //     '070 Heaney Lakes Suite 380',
  //     '9:00 - 17:00, Monday to Friday',
  //   ],
  // },
  // {
  //   title: 'Phone',
  //   descriptions: ['+012 345 6789', '+098 765 4321'],
  // },
  // {
  //   title: 'Certificate',
  //   descriptions: ['AAMA', 'ABMS'],
  // },
];

const DoctorInformation = memo((navigation, route) => {
  const [doctorInfomation, setDoctorInfomation] = useState(INFORMATIONDATA);

  const renderItem = useCallback(({ item }) => {
    const { title, descriptions, address } = item;
    return (
      <InformationItem
        address={address}
        title={title}
        descriptions={descriptions}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={doctorInfomation}
        renderItem={renderItem}
        // renderItem={renderItem}
        keyExtractor={keyExtractor}
        bounces={false}
      />
    </View>
  );
});

export default DoctorInformation;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: scaleHeight(24),
  },
});
