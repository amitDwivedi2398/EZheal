import React, { memo } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '@ultis/colors';
import FONTS from '@ultis/fonts/index';
import { scaleHeight, scaleWidth } from '@ultis/size';
import ROUTES from '@ultis/routes';
import LabUpComing from '@screens/LabBooking/LabUpcoming/LabUpComing';
import LabPast from '@screens/LabBooking/LabPast/LabPast';

const Tab = createBottomTabNavigator();

interface Props {
  LabUpComing?: number;
  LabPast?: number;
}

const BookingListTab = memo((props: Props) => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTES.LabUpComing}
      tabBarOptions={{
        activeTintColor: colors.white,
        inactiveTintColor: colors.dimGray,
        activeBackgroundColor: colors.classicBlue,
        inactiveBackgroundColor: colors.pageBackGround,
        tabStyle: {
          borderRadius: scaleHeight(40),
          justifyContent: 'center',
          alignItems: 'center',
        },
        labelStyle: {
          fontFamily: FONTS.HIND.regular,
          fontSize: scaleHeight(13),
        },
        style: {
          marginHorizontal: scaleWidth(24),
          marginTop: scaleHeight(70),
          position: 'absolute',
          top: 0,
          borderTopWidth: 0,
          borderRadius: scaleHeight(40),
          height: scaleHeight(40),
          backgroundColor: colors.pageBackGround,
          shadowOffset: { width: 0, height: 7 },
          shadowRadius: 64,
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowOpacity: 0.5,
        },
        safeAreaInsets: {
          bottom: 0,
          top: 0,
        },
      }}>
      <Tab.Screen
        name={ROUTES.LabUpComing}
        component={LabUpComing}
        options={{ title: `UpComing (${props.LabUpComing})` }}
      />
      <Tab.Screen
        name={ROUTES.LabPast}
        component={LabPast}
        options={{ title: `Past (${props.LabPast})` }}
      />
    </Tab.Navigator>
  );
});
export default BookingListTab;
