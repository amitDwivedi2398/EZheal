import React, { memo } from 'react';
import {Image  } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '@ultis/routes';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/ButtonHeader';
import HeaderBackGround from '@components/HeaderBackGround';
import MainPage from '@screens/MainPage';
import SvgMenu from '@svgs/SvgMenu';
import SvgNotification from '@svgs/SvgNotification';
import SvgCarer from '@svgs/SvgCarer';
import colors from '@ultis/colors';
import SvgEzcan from '@svgs/SvgEzcan';
import SvgCart from '@svgs/Cart/SvgCart';

const Stack = createStackNavigator();

const MainPageStack = memo(({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.MainPage}
        component={MainPage}
        options={({ navigation }) => ({
          headerTitle: () => (
            <HeaderTitle children={<Image style={{width:100, height: 50,alignSelf:'center' }} source={require('../assets/logo/Ezheal_logo.png')}/>} />
          ),
          headerLeft: () => (
            <ButtonHeader
              onPress={() => navigation.navigate(ROUTES.Menu, { index: 0 })}
              children={<SvgMenu />}
            />
          ),
          headerRight: () => (
            <ButtonHeader
              children={<SvgCart />}
              onPress={() => {
                navigation.navigate(ROUTES.Cart);
              }}
            />
          ),
          headerBackground: () => <HeaderBackGround />,
        })}
      />
    </Stack.Navigator>
  );
});

export default MainPageStack;
