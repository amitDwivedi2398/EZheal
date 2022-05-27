import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import ButtonPrimary from '@components/ButtonPrimary';
import colors from '@ultis/colors';
import { scaleHeight, scaleWidth } from '@ultis/size';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from '@ultis/routes';
import BookingListTab from '@navigation/BookingListTab';

const LabBooking = memo(({ navigation }) => {
  const onCreateAppointment = useCallback(() => {
    navigation.navigate(ROUTES.CreateAppointment);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <BookingListTab LabUpComing={2} LabPast={5} />
    </View>
  );
});

export default LabBooking;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
});
