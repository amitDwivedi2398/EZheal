//import liraries
import ButtonPrimary from '@components/ButtonPrimary';
import { scaleHeight, scaleWidth } from '@ultis/size';
import React, { Component } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';

// create a component
const Prescription = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.btn}>
      <ButtonPrimary title='Upload Prescription'  />
      </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn:{
        width:scaleWidth(200),
        alignSelf:'center',
        marginVertical:scaleHeight(10),
      }
});

//make this component available to the app
export default Prescription;
