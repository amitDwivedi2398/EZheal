import { scaleHeight, scaleWidth } from '@ultis/size';
import React, { memo, useState, useCallback, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';
import FONTS from '@ultis/fonts/index';
import ButtonPrimary from '@components/ButtonPrimary';
import axios from 'axios';

export default function Prescription({ navigation }) {
  const [prescription, setPrescription] = useState({});
  console.log(prescription);

  const getprescription = async () => {
    // console.log("amit");
    axios
      .get(`https://ezheal.ai/api/ApiCommonController/getprecription/30`)
      .then((response) => {
        // console.log(response.data.data.clinician_name)
        const prescriptions = response.data.data;
        setPrescription(prescriptions);
        console.log(prescriptions.description);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getprescription();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.btn}>
        <ButtonPrimary title="Upload Prescription" />
      </View>
      <View>
        <View style={styles.MainSection}>
          <View
            style={{
              backgroundColor: 'white',
              shadowColor: 'black',
              shadowOpacity: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {/* <Image
              style={styles.img}
              source={require('../../assets/Report/img-report.png')}
            /> */}
            <TouchableOpacity>
              <Image
                source={{ uri: `${prescription.image}` }}
                style={styles.img}
              />
            </TouchableOpacity>

            <View style={styles.txtSection}>
              <Text style={styles.txtSty}>{prescription.doc_id}</Text>
              <Text style={styles.txtSty}>{prescription.create_date}</Text>
              <Text style={styles.txtSty}>{prescription.description}</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: scaleWidth(200),
    height: scaleHeight(150),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  MainSection: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: scaleWidth(10),
    borderWidth: 5,
    borderRadius: 10,
    borderColor: '#4F6DE6',
    width: scaleWidth(350),
  },
  txtSection: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 10,
    alignItems: 'center',
  },
  txtSty: {
    fontFamily: FONTS.HIND.Bold,
  },
  btn: {
    width: scaleWidth(200),
    alignSelf: 'center',
    marginVertical: scaleHeight(10),
  },
});
