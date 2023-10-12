import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import LoginFields from '../components/LoginFields';
import { BackSvgComponent, CloseEyeSvgComponent, GoogleSvgComponent, OpenEyeSvgComponent } from '../assets/icons/Svg';

type Props = {}

const SignIn = (props: Props) => {
 const navigation = useNavigation();
 const [credentials, setCredentials] = useState({
   name: '',
   mobile: '',
   password: '',
 });
 const [isPasswordHidden, setIsPasswordHidden] = useState(true);
 return (
   <View className="h-full bg-black w-full p-3 ">
     <View className="flex-row items-center gap-x-6">
       <TouchableOpacity
         activeOpacity={0.7}
         onPress={() => navigation.goBack()}
         className="h-12 w-12 active:bg-zinc-600 active:shadow-md active:shadow-zinc-600 bg-opacity-10 rounded-full ">
         <BackSvgComponent class="fill-white h-7 w-7 m-auto ml-0" />
       </TouchableOpacity>
       <Text className="text-white text-3xl font-[500]">Sign in</Text>
     </View>
     <View className="my-5">
       <Text className="text-zinc-500 text-base">
         Sign in with one of following options.
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
               <OpenEyeSvgComponent class="fill-zinc-400 h-6 w-6 m-auto" />
             ) : (
               <CloseEyeSvgComponent class="fill-zinc-400 h-6 w-6 m-auto" />
             )}
           </View>
         </TouchableOpacity>
       </View>
       <TouchableOpacity
         activeOpacity={0.7}
         className=" w-full py-4 mx-auto mt-8 bg-red-500 rounded-xl text-center"
         onPress={function () {
           console.log('credentials', credentials);
         }}>
         <Text className="text-white m-auto font-semibold text-lg">
           Sign In
         </Text>
       </TouchableOpacity>
     </View>
     <Text className="text-red-500 mx-auto mb-5">OR</Text>

     <TouchableOpacity
       activeOpacity={0.7}
       className="h-16 w-full border border-zinc-700  bg-zinc-900 bg-opacity-100 rounded-xl flex-row items-center justify-center">
       <GoogleSvgComponent class="fill-white h-6 w-6 mr-3" />
       <Text className="text-white text-xl font-semibold">google</Text>
     </TouchableOpacity>
     <View className="flex-row items-center justify-center gap-x-2 mt-5">
       <Text className="text-base text-zinc-500">Don't have an account</Text>
       <TouchableOpacity activeOpacity={0.7}>
         <Text
           className="text-white font-semibold text-base"
           onPress={() => navigation.navigate('Logon')}>
           {' '}
           Sign Up
         </Text>
       </TouchableOpacity>
     </View>
   </View>
 );
}

export default SignIn