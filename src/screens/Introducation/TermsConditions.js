import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { moderateScale, scale } from 'react-native-size-matters';
import axios from 'axios';

export default function TermsConditions() {

  const [terms, setTerms] = useState([]);

  const getTerm = async () => {
    axios.get(`https://ezheal.ai/api/ApiCommonController/termcondition`)
      .then(response => {
        //console.log(response.data.data)
        const terms = response.data.data;
        setTerms(terms);
        console.log(terms);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTerm();

  }, []);
  return (
    <ScrollView style={styles.container}>
      {terms?.map((ter) =>(
      <View style={{ flex: 1 }}>
        <Text style={styles.heding}>{ter.title}</Text>
        <Text style={styles.heding2}>
          {ter.editor1}
        </Text>
      </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  heding: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#349FFE',
    alignSelf: 'center',
    padding: moderateScale(20),
  },
  heding2: {
    width: scale(320),
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 5,
    color: 'black',
  },
});
