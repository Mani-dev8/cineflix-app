import {View, Text, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from '../components/Toast';
type Props = {};

type RootStackParamList = {
  OtpVerification: {data: {mobile: number; name: string; password: string}};
};
export type OtpVerification = RouteProp<RootStackParamList, 'OtpVerification'>;
const OtpVerification = (props: Props) => {
  const navigation = useNavigation();
  const [otpInputText, setotpInputText] = useState<any>(null);
  const route = useRoute<OtpVerification>();
  const mobile = route.params.data.mobile;
  const name = route.params.data.name;
  const password = route.params.data.password;
  const [otp, setOtp] = useState<any>(null);
  const handleVerification = async () => {
    if (otp == otpInputText) {
      const dataUser = {
        userName: name,
        password: password,
        phone: mobile,
      };
      // ============================================================== create user Phone backend
      const response = await fetch(
        'http://192.168.0.100:5000/api/v1/user/new/phone',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(dataUser),
        },
      );
      const statusCode = response.status;
      if (statusCode === 201) {
        const userStorageData = {
          userName: name,
          UserId: `uId${Math.floor(
            Math.random() * 9999999 - 1000000 + 1000000,
          )}`,
        };
        await AsyncStorage.setItem('userData', JSON.stringify(userStorageData));
        navigation.navigate('Main');
      }
      if (statusCode === 409) {

        navigation.navigate('Logon');
        return <Toast duration={2000} message={"user with this name already exist please try new username"}/>
      }
      
    }
  };
  const getOtp = async () => {
    const storedOtp = await AsyncStorage.getItem('otp');
    setOtp(storedOtp);
  };
  useEffect(() => {
    console.log('mobile', mobile);
    const body_data = {
      mobile: mobile,
    };
    getOtp();
  }, []);

  return (
    <>
      <View className="flex-1 bg-black items-center py-10 relative">
        <Text className="text-lg font-semibold text-white">Enter OTP</Text>
        <View className="w-[80%]  aspect-square">
          <LottieView
            source={require('../assets/lottie/otp-screen-lottie.json')}
            autoPlay={true}
          />
        </View>
        <View className="items-center gap-y-6 w-full">
          <Text className="text-base text-zinc-500 w-[70%] text-center ">
            Please enter the 6 digit code we just sent to {mobile} to proceed
          </Text>
          <View className="relative w-fit">
            <TextInput
              keyboardType="numeric"
              value={otpInputText}
              onChangeText={text => setotpInputText(text)}
              className="border-b border-red-500 text-white text-center tracking-[19] w-[calc(48*5)]  text-4xl"
              maxLength={6}
              cursorColor={'border-color: rgb(239 68 68)'}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={handleVerification}
          activeOpacity={0.7}
          className="text-lg mt-16 w-3/5 self-center  bg-red-500 px-3 rounded py-3">
          <Text className="text-black text-xl self-center ">Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default OtpVerification;
