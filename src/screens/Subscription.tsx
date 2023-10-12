import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RazorpayCheckout from 'react-native-razorpay';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
interface PricingProps {
  title: string;
  planDetails: string;
  planPrice: string;
  onPressSubscribe: () => void;
}

const Pricing: React.FC<PricingProps> = ({
  title,
  planDetails,
  planPrice,
  onPressSubscribe,
}) => {
  const benefits = planDetails.split('\n').map((benefit, index) => (
    <Text key={index} style={styles.benefitItem} className="text-zinc-400">
      {benefit.trim()}
    </Text>
  ));

  return (
    <View style={styles.container} className="border border-zinc-700 m-5 mt-7">
      <View className="flex-row items-center justify-between pt-2 pb-3 border-b border-zinc-700">
        <Text style={styles.title} className="uppercase">
          {title}
        </Text>
        <Text className="text-red-500 text-3xl font-semibold">
          ₹ {planPrice}
        </Text>
      </View>
      <View className="px-2 pt-2">
        <Text className="text-lg font-[500] text-zinc-200 pb-1">Benefits:</Text>
        <View style={styles.benefitsContainer}>{benefits}</View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        className="bg-red-500"
        onPress={onPressSubscribe}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 8,
  },
  benefitsContainer: {
    marginBottom: 16,
  },
  benefitItem: {
    fontSize: 16,
    color: 'rgb(161 161 170)',
    marginBottom: 4,
  },
  button: {
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
type RootStackParamList = {
  movieId: {data: {movie_id: number}[]};
};
export type OverviewScreenRouteProp = RouteProp<RootStackParamList, 'movieId'>;
const Subscription:React.FC = () => {
  const route = useRoute<OverviewScreenRouteProp>();
  const {movie_id} = route.params.data[0];
  const navigation = useNavigation();
  const handlePayment = async (sub_amount: number, sub_type: string) => {
    const res = await fetch(
      'http://192.168.0.100:5000/api/v1/order/order-create',
      {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({amount: sub_amount}),
      },
    );
    const {id, amount, currency} = await res.json();
    console.log(
      '🚀 ~ file: Subscription.tsx:100 ~ handlePayment ~ id   ~~~  :',
      id,
    );
    console.log(
      '🚀 ~ file: Subscription.tsx:100 ~ handlePayment ~ amount   ~~~  :',
      amount,
    );
    const options = {
      description: `${sub_type} Subscription`, // Subscription description
      image: 'https://iili.io/HrNkrZu.png', // Path to your logo image
      currency: currency, // Currency code
      key: 'rzp_test_A0kVgihb52ODEI', // Your Razorpay API key
      amount: amount, // Amount in paise (e.g., for INR 500, provide 50000)
      name: 'CineFlix', // Your app or company name
      //============== order_id: id,
      order_id: id,
      prefill: {
        email: 'example@example.com', // User's email address
        contact: '9876543210', // User's contact number
      },
      theme: {color: '#000'}, // Customize the Razorpay payment screen color
    };
    try {
      const data = await RazorpayCheckout.open(options);
      console.log('Payment success:', data);
      const user = await AsyncStorage.getItem('userData');
      const userData = user
        ? JSON.parse(user)
        : [{userName: `u_${Math.floor(Math.random() * 100000)}`}];
      await verifyOrder(data, {
        userName: userData.userName,
        subscriptionType: sub_type,
      });
      // Handle successful payment and update user subscription status
    } catch (error) {
      console.log('Payment error:', error);
      // Handle payment failure
    }
  };
  const verifyOrder = async (razorpayResponse: any, orderData: any) => {
    try {
      const response = await fetch(
        'http://192.168.0.100:5000/api/v1/order/verify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            razorpay: razorpayResponse,
            orderData: orderData,
          }),
        },
      );
      const message = await response.json();
      console.log('Verify order response:', message);
      if (message.success) {
        await fetch()
        navigation.navigate('WatchNow', {data: [{id: movie_id}]});
      } else {
        // Handle order verification failure
      }
    } catch (error) {
      console.log('Verify order error:', error);
      // Handle order verification failure
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'black'}}>
      <Pricing
        planPrice="99"
        title="Monthly "
        planDetails={`• Unlimited access to the entire movie library.
• Watch movies on-demand, anytime, and from any compatible device.
• HD video quality available.
• Exclusive access to new movie releases.
• Access to special behind-the-scenes content and bonus features.`}
        onPressSubscribe={() => {
          handlePayment(99, 'Monthly');
        }}
      />
      <Pricing
        planPrice="249"
        title="Quarterly "
        planDetails={`• Unlimited access to the entire movie library.
• Watch movies on-demand, anytime, and from any compatible device.
• HD video quality available.
• Exclusive access to new movie releases.
• Access to special behind-the-scenes content and bonus features.`}
        onPressSubscribe={() => {
          var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: '<YOUR_KEY_ID>',
            amount: '5000',
            name: 'Acme Corp',
            order_id: 'order_DslnoIgkIDL8Zt', //Replace this with an order_id created using Orders API.
            prefill: {
              email: 'gaurav.kumar@example.com',
              contact: '9191919191',
              name: 'Gaurav Kumar',
            },
            theme: {color: '#53a20e'},
          };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              console.log('data', data);
            })
            .catch(error => {
              // handle failure
              console.log('error', error);
            });
        }}
      />
      <Pricing
        planPrice="899"
        title="Quarterly "
        planDetails={`• Unlimited access to the entire movie library.
• Watch movies on-demand, anytime, and from any compatible device.
• HD video quality available.
• Exclusive access to new movie releases.
• Access to special behind-the-scenes content and bonus features.`}
        onPressSubscribe={() => {}}
      />
    </ScrollView>
  );
};

export default Subscription;
