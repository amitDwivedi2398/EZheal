import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '@ultis/routes';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/ButtonHeader';
import HeaderBackGround from '@components/HeaderBackGround';
import SvgMenu from '@svgs/SvgMenu';
import SvgNotification from '@svgs/SvgNotification';
import Drugs from '@screens/Drugs';
import LabBooking from '@screens/LabBooking';

const Stack = createStackNavigator();

const LabBookingStack = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.LabBooking}
        component={LabBooking}
        options={({ navigation }) => ({
          headerTitle: () => <HeaderTitle title={'Lab Booking'} />,
          headerLeft: () => (
            <ButtonHeader
              onPress={() => navigation.navigate(ROUTES.Menu, { index: 1 })}
              children={<SvgMenu />}
            />
          ),
          headerRight: () => (
            <ButtonHeader
              left={true}
              children={<SvgNotification />}
              onPress={() => {
                navigation.navigate(ROUTES.Notification);
              }}
            />
          ),
          headerBackground: () => <HeaderBackGround />,
        })}
      />
    </Stack.Navigator>
  );
});

export default LabBookingStack;
