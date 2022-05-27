import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import FONTS from '@ultis/fonts/index';
import colors from '@ultis/colors';
import { RadioButton } from 'react-native-paper';
import SvgHospital from '@svgs/MainPage/SvgHospital';
import SvgEdit from '@svgs/Edit/SvgEdit';
import { scaleWidth, scaleHeight } from '@ultis/size';
import SvgHome from '@svgs/Home/SvgHome';
import ButtonPrimary from '@components/ButtonPrimary';
export default function DeliveryAddress() {
  const [checked, setChecked] = React.useState('first');
  return (
    <ScrollView>
      <View style={styles.main}>
        <TouchableOpacity>
          <View style={styles.hedingtxt}>
            <Text style={styles.wellcometxt}>
              WelCome,
              <Text style={styles.hedingtxt1}>Amit Dwivedi</Text>
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.hedar2}>
          <View style={styles.radiobtn}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <SvgHospital style={styles.img} />
            <View style={styles.office}>
              <Text style={{ fontFamily: FONTS.HIND.Bold }}>
                Send to Office
              </Text>
              <Text style={{ fontFamily: FONTS.HIND.Bold }}>
                A-4.Second Floor. Sector 64 Indor
              </Text>
            </View>
          </View>
          <View style={styles.editView}>
            <TouchableOpacity>
              <SvgEdit />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.hedar2}>
          <View style={styles.radiobtn}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>
            <SvgHome style={styles.img} />
            <View style={styles.office}>
              <Text style={{ fontFamily: FONTS.HIND.Bold }}>Send to Home</Text>
              <Text style={{ fontFamily: FONTS.HIND.Bold }}>
                A-4.Second Floor. Sector 64 Indor
              </Text>
            </View>
          </View>
          <View style={styles.editView}>
            <TouchableOpacity>
              <SvgEdit />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.nextHeding}>
        <TouchableOpacity>
          <Text style={styles.addres}>Add New Delivery Address</Text>
        </TouchableOpacity>
        <ButtonPrimary style={styles.buttonPrimacy} title={'Update'} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonPrimacy: {
    width: scaleWidth(295),
    alignSelf: 'center',
    marginTop: scaleHeight(25),
  },
  main: {
    marginVertical: scaleHeight(15),
    flex: 1,
  },
  hedingtxt: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  wellcometxt: {
    fontSize: 20,
    fontFamily: FONTS.HIND.Regular,
  },
  hedingtxt1: {
    fontFamily: FONTS.HIND.Regular,
    color: colors.classicBlue,
  },
  hedar2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.backGround,
    width: scaleWidth(340),
    height: scaleHeight(100),
    alignSelf: 'center',
    borderRadius: 10,
    marginVertical: scaleWidth(10),
  },
  radiobtn: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginHorizontal: scaleWidth(10),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  office: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  editView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextHeding: {
    marginTop: scaleHeight(250),
    alignSelf: 'center',
  },
  addres: {
    fontSize: 20,
    fontFamily: FONTS.HIND.Regular,
    color: colors.blue,
    alignSelf: 'center',
  },
});
