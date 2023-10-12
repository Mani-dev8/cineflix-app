import {TouchableOpacity, View, Text, TextInput, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  BackSvgComponent,
  CloseEyeSvgComponent,
  GoogleSvgComponent,
  OpenEyeSvgComponent,
} from '../assets/icons/Svg';
import {SvgProps} from 'react-native-svg';
import {GoogleSignin, User} from '@react-native-google-signin/google-signin';
import LoginFields from '../components/LoginFields';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from '../components/Toast';
type Props = {};

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });
  const handleOtpVerification = async () => {
    try {
      const data = {
        phone: credentials.mobile,
        number: Math.floor(Math.random() * 999999 - 100000 + 100000),
      };
      const response = await fetch('http://192.168.0.102:5000/api/v1/sms/new', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const statusCode = response.status;
      if (statusCode === 200) {
        navigation.navigate('OtpVerification', {
          data: {
            mobile: credentials.mobile,
            name: credentials.name,
            password: credentials.password,
          },
        });
        await AsyncStorage.setItem('otp', data.number.toString());
      }
    } catch (error) {
      console.log('error while otp send in handleOtpVerificaion function', error)
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '290257516106-me5id1ea3hl3amf4kqn6k4lprs135p8c.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  // Client ID
  // 290257516106-me5id1ea3hl3amf4kqn6k4lprs135p8c.apps.googleusercontent.com
  // Client Secret
  // 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

  const [userData, setUserData] = useState<any>(null);
  const googleSignUp = async () => {
    try {
      
      await GoogleSignin.hasPlayServices()
      const userInfo = await GoogleSignin.signIn()
      console.log(
        '🚀 ~ file: SignUp.tsx:28 ~ googleSignUp ~ userInfo   ~~~  :',
        userInfo,
      )
      setUserData(userInfo)
      const uri = 'http://192.168.0.102:5000/api/v1/user/new';
      const data_signup = {
        userName: "mdsninfdsi",
        email: "fml;dsa",
        googleId: "fdmslkfl",
      };
      // const data_signup = {
      //   userName: userInfo.user.name,
      //   email: userInfo.user.email,
      //   googleId: userInfo.user.id,
      // };
      const response = await fetch(uri, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data_signup),
      });
      const statusCode = response.status;
      console.log('statusCode', statusCode);
      if (statusCode === 201 || 409) {
        const userStorageData = {
          userName: data_signup.userName,
          UserId: data_signup.googleId,
        };
        await AsyncStorage.setItem('userData', JSON.stringify(userStorageData));
        console.log(
          '🚀 ~ file: SignUp.tsx:60 ~ googleSignUp ~ userId   ~~~  :',
          userStorageData,
        );
        navigation.navigate('Main');
        return <Toast duration={2000} message="You are successfully Sign In" />;
      }
      const data = response.json();
      console.log(
        '🚀 ~ file: SignUp.tsx:43 ~ googleSignUp ~ data   ~~~  :',
        data,
      );
    } catch (error) {
      console.log('error', error);
      setUserData(error);
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUserData(userInfo);
      console.log(
        '🚀 ~ file: App.tsx:57 ~ signIn ~ userInfo   ~~~  :',
        userInfo,
      );
    } catch (error) {
      console.log('error', error);
    }
  };
  const navigation = useNavigation();

  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [isConfrimPasswordHidden, setIsConfrimPasswordHidden] = useState(true);
  return (
    <View className="h-full bg-black w-full p-3 ">
      <View className="flex-row items-center gap-x-6">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Main')}
          className="h-12 w-12 active:bg-zinc-600 active:shadow-md active:shadow-zinc-600 bg-opacity-10 rounded-full ">
          <BackSvgComponent class="fill-white h-7 w-7 m-auto ml-0" />
        </TouchableOpacity>
        <Text className="text-white text-3xl font-[500]">Sign up</Text>
      </View>
      <View className="my-5">
        <Text className="text-zinc-500 text-base">
          Sign up with one of following options.
        </Text>
        <LoginFields
          fieldName="User Name"
          palceholderValue="Tim Cook"
          value={credentials.name}
          onChangeText={text => {
            return setCredentials({...credentials, name: text});
          }}
          keyboardType="default"
        />
        <LoginFields
          fieldName="Mobile Number"
          palceholderValue="9812348765"
          maxLength={10}
          value={credentials.mobile}
          onChangeText={text => {
            return setCredentials({...credentials, mobile: text});
          }}
          keyboardType="numeric"
        />
        <View className="flex-row items-center  relative">
          <LoginFields
            fieldName="Password"
            palceholderValue="********"
            value={credentials.password}
            onChangeText={text => {
              return setCredentials({...credentials, password: text});
            }}
            keyboardType="default"
            secureTextEntry={isPasswordHidden ? true : false}
            classTailwind="pr-12 "
          />
          <TouchableOpacity
            className="absolute right-0 h-12 w-10  bottom-0 mb-[14] mr-2 "
            onPress={() => setIsPasswordHidden(!isPasswordHidden)}
            activeOpacity={0.7}>
            <View className="relative h-full w-full">
              {isPasswordHidden ? (
                <CloseEyeSvgComponent class="fill-zinc-400 h-6 w-6 m-auto" />
              ) : (
                <OpenEyeSvgComponent class="fill-zinc-400 h-6 w-6 m-auto" />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center  relative">
          <LoginFields
            fieldName="Confrim Password"
            palceholderValue="********"
            value={credentials.confirmPassword}
            onChangeText={text => {
              return setCredentials({...credentials, confirmPassword: text});
            }}
            keyboardType="default"
            secureTextEntry={isConfrimPasswordHidden ? true : false}
            classTailwind="pr-12 "
          />
          <TouchableOpacity
            className="absolute right-0 h-12 w-10  bottom-0 mb-[14] mr-2 "
            onPress={() => setIsConfrimPasswordHidden(!isConfrimPasswordHidden)}
            activeOpacity={0.7}>
            <View className="relative h-full w-full">
              {isConfrimPasswordHidden ? (
                <CloseEyeSvgComponent class="fill-zinc-400 h-6 w-6 m-auto" />
              ) : (
                <OpenEyeSvgComponent class="fill-zinc-400 h-6 w-6 m-auto" />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          className=" w-full py-4 mx-auto mt-8 bg-red-500 rounded-xl text-center"
          onPress={handleOtpVerification}>
          <Text className="text-white m-auto font-semibold text-lg">
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-red-500 mx-auto mb-5">OR</Text>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={googleSignUp}
        className="h-16 w-full border border-zinc-700  bg-zinc-900 bg-opacity-100 rounded-xl flex-row items-center justify-center">
        <GoogleSvgComponent class="fill-white h-6 w-6 mr-3" />
        <Text className="text-white text-xl font-semibold">google</Text>
      </TouchableOpacity>
      <View className="flex-row items-center justify-center gap-x-2 mt-5">
        <Text className="text-base text-zinc-500">Already have an account</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            className="text-white font-semibold text-base"
            onPress={() => navigation.navigate('Login')}>
            {' '}
            Log in
          </Text>
        </TouchableOpacity>
        {/* 
        {userData ? (
          <View>
            <Text style={{color: 'white'}}>
              User Email: {userData.user.email}
            </Text>
            <Text style={{color: 'white'}}>
              User Name: {userData.user.name}
            </Text>
            <Text style={{color: 'white'}}>User Id: {userData.user.id}</Text>
          </View>
        ) : (
          <Text style={{color: 'white'}}>null userData</Text>
        )} */}
      </View>
    </View>
  );
};

export default SignUp;
