import React, { memo, useState, useCallback } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    Platform,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@ultis/colors';
import SvgStar from '@svgs/AppointmentList/SvgStar';
import FONTS from '@ultis/fonts';
import { scaleHeight, scaleWidth } from '@ultis/size';
import ButtonPrimary from '@components/ButtonPrimary';
import SvgVideo from '@svgs/SvgVideo';
import SvgMessage from '@svgs/SvgMessage';
import SvgBackArrow from '@svgs/SvgBackArrow';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import SvgStethoscopeInactive from '@svgs/MainBottomTab/SvgStethoscopeInactive';
import SvgArrowDown from '@svgs/SvgArrowDown';
import DoctorServiceItem from '@screens/DoctorProfile/components/DoctorServiceItem';
import TopicItem from '@components/TopicItem';
import SvgDoctor from '@svgs/MainPage/SvgDoctor';
import SvgLocation from '@svgs/SvgLocation';
import ROUTES from '@ultis/routes';
import { Searchbar } from 'react-native-paper';
import SvgCalendar from '@svgs/SvgCalendar';

const DOCTOR_DATA = {
    imgDoctor: require('@assets/DoctorProfile/Doctor.png'),
    doctorName: 'Dr. Ann Carlson',
    specialized: 'Cardiologist',
    title: 'The Advantages Of Minimal Repair Technique',
    rating: '5.0',
    location: 'Newyork, United States',
    doctorServices: ['Pediatrics', 'Medical', 'Heart', 'Ophthalmic', 'Dentistry'],
    reviewer: '34',
};

const Checkout = memo(({ navigation }) => {
    const [doctorData, setDoctorData] = useState(DOCTOR_DATA);

    const onGoBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const onBookAppoitnment = useCallback(() => {
        navigation.navigate(ROUTES.BookAppointment);
    }, [navigation]);

    const onVideoCall = useCallback(() => {
        navigation.navigate(ROUTES.VideoCall);
    }, [navigation]);

    const onMessage = useCallback(() => {
        navigation.navigate(ROUTES.DoctorMessage);
    }, [navigation]);

    const onDoctorInfomation = useCallback(() => {
        navigation.navigate(ROUTES.DoctorInformation);
    }, [navigation]);

    const onWorkingAddress = useCallback(() => {
        navigation.navigate(ROUTES.DoctorAddress);
    }, [navigation]);

    const onDoctorReview = useCallback(() => {
        navigation.navigate(ROUTES.DoctorReview);
    }, [navigation]);

    const renderItem = useCallback(() => {
        return doctorData.doctorServices.map((item, index) => {
            return <DoctorServiceItem key={index} title={item} />;
        });
    }, [doctorData.doctorServices]);

    return (
        <ScrollView style={styles.container}>
            {/* <Searchbar style={styles.btnSearch} placeholder="Search" /> */}
            <View style={styles.headerView}>
                <View style={styles.header}>
                    <View style={styles.setRow}>
                        <Text style={styles.doctorName}>{doctorData.doctorName}</Text>
                        <View style={styles.rateView}>
                            <Text style={styles.specialized}>{doctorData.specialized}</Text>
                            <SvgStar style={styles.svgStart} />
                            <Text style={styles.txtRating}>{doctorData.rating}</Text>
                        </View>
                        <Text style={styles.txtTitle}>{doctorData.title}</Text>
                    </View>
                    <Image style={styles.imgDoctor} source={doctorData.imgDoctor} />
                </View>
                <View style={styles.buttonsView}>
                    {/* <ButtonPrimary
            onPress={onBookAppoitnment}
            style={styles.buttonPrimary}
            title={'Book Appoitnment'}
            titleStyle={styles.txtBtn}
          /> */}
                    <TouchableOpacity onPress={onVideoCall} style={styles.svgVideo}>
                        <SvgVideo />
                    </TouchableOpacity>
                    <Text style={styles.txtOnline} >Online Consultation</Text>
                    <TouchableOpacity onPress={onMessage} style={styles.svgMessage}>
                        <SvgMessage />
                    </TouchableOpacity>
                </View>
                <View style={styles.txtTime}>
                    <View style={styles.txtCalender}>
                        <SvgCalendar />
                        <Text style={styles.txt}>Tomorrow 1:05</Text>
                    </View>
                    <View>
                        <Text style={styles.txtCall}>Doctor will call you between 01:05PM - 01:35PM</Text>
                    </View>
                    <View style={styles.amount}>
                        <Text style={styles.txtamo}>Amount to Pay</Text>
                        <Text style={styles.txtamo1}>₹1500</Text>
                    </View>
                </View>
               
            </View>
            <View style={styles.patient}>
                    <View style={styles.row}>
                        <Text style={styles.details}>Patient Details</Text>
                        <Text style={styles.details1}>Prescription to be generated in the name of?</Text>
                        </View>
                    <View style={styles.btn}>
                        <View style={{width:50}}><ButtonPrimary title='amit'  /></View>
                        <View style={{width:100}}><ButtonPrimary title='24 Male' /></View>
                        <View style={{width:100}}><ButtonPrimary title='+Add Member' /></View>
                        </View>
                </View>
                <ButtonPrimary
        style={styles.buttonPrimary}
        title={'Pay Now'}
      />
        </ScrollView>
    );
});

export default Checkout;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.pageBackGround,
    },
    headerView: {
        backgroundColor: colors.white,
        borderBottomLeftRadius: scaleWidth(24),
        borderBottomRightRadius: scaleWidth(24),
        paddingLeft: scaleWidth(32),
        paddingBottom: scaleHeight(24),
        justifyContent: 'flex-end',
        paddingRight: scaleWidth(24),
        marginTop: scaleWidth(10),
        paddingTop:
            Platform.OS === 'ios'
                ? getStatusBarHeight() + scaleHeight(30)
                : scaleHeight(30),
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    doctorName: {
        fontFamily: FONTS.HIND.Regular,
        fontSize: scaleHeight(18),
        lineHeight: scaleHeight(24),
        color: colors.semiBlack,
    },
    specialized: {
        fontFamily: FONTS.HIND.Regular,
        fontSize: scaleHeight(14),
        lineHeight: scaleHeight(20),
        color: colors.silverChalice,
    },
    txtRating: {
        fontFamily: FONTS.HIND.Regular,
        fontSize: scaleHeight(14),
        lineHeight: scaleHeight(18),
        marginBottom: scaleHeight(-4),
        color: colors.orange,
    },
    svgStart: {
        marginBottom: scaleHeight(5),
        marginLeft: scaleWidth(7),
        marginRight: scaleWidth(5),
    },
    rateView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scaleHeight(6),
        marginBottom: scaleHeight(11),
    },
    txtTitle: {
        fontFamily: FONTS.HIND.Regular,
        fontSize: scaleHeight(14),
        lineHeight: scaleHeight(20),
        color: colors.dimGray,
        marginRight: scaleWidth(16),
    },
    imgDoctor: {
        width: scaleWidth(88),
        height: scaleHeight(128),
        borderRadius: scaleWidth(16),
        overflow: 'hidden',
    },
    setRow: {
        width: scaleWidth(215),
    },
    buttonPrimary: {
        width: scaleWidth(191),
    },
    txtBtn: {
        fontFamily: FONTS.HIND.SemiBold,
        fontSize: scaleHeight(14),
        textTransform: 'capitalize',
        fontWeight: '600',
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scaleHeight(26),
    },
    svgVideo: {
        width: scaleWidth(40),
        height: scaleWidth(40),
        borderRadius: scaleWidth(16),
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgMessage: {
        width: scaleWidth(40),
        height: scaleWidth(40),
        borderRadius: scaleWidth(16),
        backgroundColor: colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
    },
    svgBackArrow: {
        width: scaleWidth(40),
        height: scaleWidth(40),
        borderRadius: scaleWidth(16),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: Platform.OS === 'ios' ? getStatusBarHeight() : scaleHeight(12),
    },
    doctorServices: {
        backgroundColor: colors.white,
        borderRadius: scaleWidth(16),
        marginHorizontal: scaleWidth(16),
        paddingBottom: scaleHeight(3),
        marginTop: scaleHeight(22),
        marginBottom: scaleHeight(23),
    },
    txtDoctorServices: {
        fontFamily: FONTS.HIND.Regular,
        fontWeight: '500',
        fontSize: scaleHeight(16),
        lineHeight: scaleHeight(24),
        textTransform: 'uppercase',
        color: colors.semiBlack,
    },
    svgArrowDown: {
        width: scaleWidth(40),
        height: scaleWidth(40),
        borderRadius: scaleWidth(16),
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    topView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: scaleWidth(22),
        paddingLeft: scaleWidth(16),
        paddingRight: scaleWidth(20),
        height: scaleHeight(60),
        marginBottom: scaleHeight(16),
    },
    flexDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemView: {
        flexDirection: 'row',
        paddingLeft: scaleWidth(16),
        flexWrap: 'wrap',
    },
    btnSearch: {
        marginTop: 10,
        borderRadius: 10,
        width: scaleWidth(350),
        justifyContent: 'center',
        alignSelf: 'center',
    },
    txtOnline: {
        justifyContent: 'center',
        alignSelf: 'center',
    },
    txtTime:{
        backgroundColor: colors.pageBackGround,
        borderBottomLeftRadius: scaleWidth(24),
        borderBottomRightRadius: scaleWidth(24),
        paddingLeft: scaleWidth(32),
        paddingBottom: scaleHeight(2),
        justifyContent: 'flex-end',
        paddingRight: scaleWidth(24),
        marginTop: scaleWidth(10),
        paddingTop:
            Platform.OS === 'ios'
                ? getStatusBarHeight() + scaleHeight(30)
                : scaleHeight(30),
    },
    txtCalender:{
        flexDirection:'row',
    },
    txt:{
        fontFamily: FONTS.HIND.Regular,
        fontSize: scaleHeight(18),
        lineHeight: scaleHeight(24),
        color: colors.semiBlack,
        marginLeft:scaleWidth(10),
    },
    txtCall:{
        color: colors.blue,
    },
    amount:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:scaleHeight(10),
    },
    txtamo:{
        color: colors.black,
        fontFamily: FONTS.HIND.Regular,
    },
    txtamo1:{
        color: colors.blue,
        fontFamily: FONTS.HIND.Bold,
    },
    patient:{
        backgroundColor: colors.white,
        borderRadius:scaleWidth(15),
        paddingLeft: scaleWidth(32),
        paddingBottom: scaleHeight(24),
        justifyContent: 'flex-end',
        paddingRight: scaleWidth(24),
        marginTop: scaleWidth(10),
        paddingTop:
            Platform.OS === 'ios'
                ? getStatusBarHeight() + scaleHeight(30)
                : scaleHeight(30),
                width:scaleWidth(330),
                justifyContent:'center',
                alignSelf:'center',
    },
    details:{
        textTransform: 'uppercase',
        color: colors.blue,
        fontFamily: FONTS.HIND.Bold,
        textDecorationLine: 'underline',
        marginBottom:scaleHeight(10),
    },
    details1:{
        color: colors.blue,
        fontFamily: FONTS.LATO.regular,
        marginBottom:scaleHeight(10),
    },
    btn:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    buttonPrimary: {
        width: scaleWidth(300),
        alignSelf: 'center',
        marginTop: scaleHeight(80),
      },
});
