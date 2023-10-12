import {View, Text, TextInput ,TextInputProps} from 'react-native';
import React, {useState} from 'react';

interface Props extends TextInputProps {
    fieldName:string,
    palceholderValue:string,
    classTailwind?:string
}

const LoginFields: React.FC<Props> = ({maxLength,fieldName,palceholderValue,keyboardType,secureTextEntry,onChangeText,value,classTailwind}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View className="gap-y-3  my-2 w-full">
      <Text className='text-white text-lg'>{fieldName}</Text>
      <TextInput
        value={value}
        maxLength={maxLength}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={palceholderValue}
        cursorColor={'red'}
        onChangeText={onChangeText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        placeholderTextColor={'rgba(63,63,70/0.8)'}
        className={`text-lg py-[13px] text-white border-2 ${
          focus ? 'border-red-500' : 'border-zinc-700'
        } px-2 rounded-xl ${classTailwind}`}
      />
    </View>
  );
};

export default LoginFields;
