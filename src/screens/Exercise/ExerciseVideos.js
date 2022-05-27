import { View, Text, StyleSheet,Image } from 'react-native';
import React, { useCallback } from 'react';
import WebView from 'react-native-webview';
import SvgBlood from '@svgs/Blood/SvgBlood';
import SvgAdd from '@svgs/SvgAdd';
import { scaleHeight, scaleWidth } from '@ultis/size';
import colors from '@ultis/colors';
import ROUTES from '@ultis/routes';

export default function ExerciseVideos({navigation}) {
  const BloodPressure = useCallback(() => {
    navigation.navigate(ROUTES.BloodPressure);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.flex1}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/-ZZPOXn6_9w' }}
        />
        <View style={styles.txtTitle}>
          <Text>Doctor</Text>
          <Text>Exercise Type</Text>
        </View>
      </View>

      <View style={styles.flex1}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/-ZZPOXn6_9w' }}
        />
        <View style={styles.txtTitle}>
          <Text>Doctor</Text>
          <Text>Exercise Type</Text>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.first}>
          <SvgBlood />
          <Text style={styles.txt}>Blood Pressure</Text>
          <SvgAdd onPress={BloodPressure} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1: {
    flex: 0.5,
    marginTop: 10,
    width: 350,
    height: 10,
  },
  txtTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  first:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    backgroundColor:colors.blue,
    borderRadius:10,
    height:scaleHeight(80),
    alignItems:'center'
    
  },
  section:{
width:scaleWidth(350),
height:scaleHeight(100),
  },
  txt:{
    color:'white'
  }
});
