import React, { memo, useCallback, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import SvgLocation from '@svgs/SvgLocation';
import axios from 'axios';

interface Props {
  nameLocation?: string;
  address?: string;
  distance?: string;
}

const DoctorAddressItem = memo((props: Props) => {
  const { nameLocation, address, distance } = props;

  const [oneDoctor, setOneDoctor] = useState({});
  console.log(oneDoctor);

  const getOneDoctor = async () => {
    // console.log("amit");
    axios
      .get(`https://ezheal.ai/api/ApiCommonController/doctorlistbyid/9`)
      .then((response) => {
        // console.log(response.data.data.clinician_name)
        const oneDoctors = response.data.data;
        setOneDoctor(oneDoctors);
        console.log(oneDoctors.clinician_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getOneDoctor();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txtLoction}>{nameLocation}</Text>
      <Text style={styles.txtAddress}>{oneDoctor.address}</Text>
      <View style={styles.distanceView}>
        <SvgLocation color={colors.classicBlue} />
        <Text style={styles.txtDistance}> {distance}</Text>
      </View>
    </View>
  );
});

export default DoctorAddressItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: scaleWidth(8),
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(24),
    marginHorizontal: scaleWidth(24),
    height: scaleHeight(139),
  },
  txtLoction: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  txtAddress: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
    marginBottom: scaleHeight(8),
    marginTop: scaleHeight(8),
  },
  distanceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtDistance: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(21),
    color: colors.classicBlue,
  },
});
