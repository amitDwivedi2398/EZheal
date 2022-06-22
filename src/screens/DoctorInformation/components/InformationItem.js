import React, { memo, useCallback, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import axios from 'axios';

interface Props {
  title?: string;
  address?: string;
  descriptions?: any;
}

const InformationItem = memo((props: Props) => {
  const { title, descriptions, address } = props;

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

  const renderItem = useCallback((item) => {
    return item.map((content, index) => {
      return (
        <Text style={styles.description} key={index}>
          {content}
        </Text>
      );
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{title}</Text>
      <View style={styles.contentView}>
        <Text>{oneDoctor.description}</Text>
      </View>
      <View style={{ paddingTop: scaleHeight(24), marginTop: scaleHeight(20) }}>
        <Text style={styles.txtTitle}>address</Text>
        <View style={styles.contentView}>
          <Text>{oneDoctor.address}</Text>
        </View>
      </View>
      <View style={{ paddingTop: scaleHeight(24), marginTop: scaleHeight(20) }}>
        <Text style={styles.txtTitle}>Phone</Text>
        <View style={styles.contentView}>
          <Text>{oneDoctor.phone}</Text>
        </View>
      </View>
      <View style={{ paddingTop: scaleHeight(24), marginTop: scaleHeight(20) }}>
        <Text style={styles.txtTitle}>Certificate</Text>
        <View style={styles.contentView}>
          <Text>{oneDoctor.qualification}</Text>
        </View>
      </View>
    </View>
  );
});

export default InformationItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: scaleWidth(8),
    paddingVertical: scaleHeight(16),
    paddingHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(24),
    marginHorizontal: scaleWidth(24),
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  description: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
    marginBottom: scaleHeight(6),
  },
  contentView: {
    flexDirection: 'column',
    marginTop: scaleHeight(8),
  },
});
