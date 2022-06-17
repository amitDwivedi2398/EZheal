import React, { memo, useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import FONTS from '@ultis/fonts';
import StarItem from '@screens/DoctorReview/components/StarItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  avatarUser?: string;
  nameUser?: string;
  rateStar?: number;
  timeReview?: string;
  desciptionReview?: string;
  order?: string;
}

const DoctorReviewItem = memo((props: Props) => {
  const {
    avatarUser,
    nameUser,
    rateStar,
    timeReview,
    desciptionReview,
    order,
  } = props;

  const [booking, setBooking] = useState([]);

  const getBooking = async () => {
    axios
      .get(`https://ezheal.ai/api/ApiCommonController/appointmentlist`,{
        headers:{
          'user_id': await AsyncStorage.getItem('user_id'),
        }
      })
      .then(response => {
        const booking = response.datadata.booking_Id.id;
        setBooking(booking);
        console.log(booking);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    getBooking();

  }, []);
  return (
    <View style={styles.container}>
      {booking?.map((book) => 
      <TouchableOpacity>
        <View style={styles.infoView}>
        {/* <Image source={{ uri: `${book.image}` }} style={styles.avatarUser}/> */}
          <Image source={avatarUser} style={styles.avatarUser} />
          <View>
            <Text style={styles.txtNameUser}>{book.patient_name}</Text>
            <Text style={styles.txtTimeReview}>{order}</Text>
          </View>
        </View>
        <Text style={styles.txtDesciptionReview}>{desciptionReview}</Text>
        <View style={styles.starItem}>
          <Text style={styles.txtTimeReview}>{book.time}</Text>
          {/* <StarItem rateStar={rateStar} /> */}
        </View>
      </TouchableOpacity>
      )}
    </View>
  );
});
export default DoctorReviewItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: scaleWidth(8),
    paddingVertical: scaleHeight(5),
    paddingHorizontal: scaleWidth(24),
    marginBottom: scaleHeight(24),
    marginHorizontal: scaleWidth(24),
  },
  infoView: {
    flexDirection: 'row',
  },
  avatarUser: {
    width: scaleWidth(40),
    height: scaleWidth(40),
    borderRadius: scaleWidth(20),
    overflow: 'hidden',
    marginRight: scaleWidth(12),
  },
  txtNameUser: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: scaleHeight(16),
    lineHeight: scaleHeight(24),
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  txtTimeReview: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '800',
    fontSize: scaleHeight(18),
    lineHeight: scaleHeight(22),
    color: colors.red,
    marginTop: scaleHeight(10),
  },
  txtDesciptionReview: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: scaleHeight(14),
    lineHeight: scaleHeight(20),
    color: colors.dimGray,
    marginTop: scaleHeight(13),
  },
  starItem: {
    position: 'absolute',
    right: scaleWidth(16),
    top: scaleHeight(10),
  },
});
