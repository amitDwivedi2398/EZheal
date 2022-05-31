import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import SvgRightArrow from '@svgs/SvgRightArrow';
import FONTS from '@ultis/fonts';
import axios from 'axios';


// interface Props {
//   Svg?: any;
//   drugName?: string;
//   concentration?: string;
//   onPress?: any;
// }

const Dietitician = () => {

  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    axios.get(`https://ezheal.ai/api/ApiCommonController/getdietician`)
      .then(response => {
        //console.log(response.data.data)
        const categories = response.data.data;
        setCategories(categories);
        console.log(categories);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCategories();

  }, []);
  return (
    <View>
      {categories?.map((cat) => (
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.container} key={cat.id}>
          <Image source={{ uri: `${cat.image}` }} style={styles.image}/>      
          <View style={styles.viewContent}>
            <Text style={styles.txtDrugName}>{cat.name}</Text>
            <Text style={styles.txtConcentration}>{cat.specialztion}</Text>
          </View>
          <SvgRightArrow style={styles.viewArrow} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Dietitician;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    marginHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(24),
    paddingVertical: scaleHeight(16),
    paddingLeft: scaleWidth(16),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: scaleWidth(8),
    width: scaleWidth(327),
    height: scaleHeight(76),
  },
  viewContent: {
    marginLeft: scaleWidth(16),
  },
  txtDrugName: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  txtConcentration: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
    marginTop: scaleHeight(6),
  },
  viewArrow: {
    position: 'absolute',
    right: scaleWidth(12),
  },
  image:{
    height:50,
    width:50,
    borderRadius:50,
  },
});
