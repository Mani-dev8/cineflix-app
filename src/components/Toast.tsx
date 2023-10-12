import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

type ToatProps={
    message:string,
    duration:number
}
const Toast:React.FC<ToatProps> = ({message, duration}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    zIndex:100
  },
  message: {
    color: '#fff',
  },
});

export default Toast;
