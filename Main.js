
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrderHistory from './orders/OrderHistory';
import OrderDiscription from './orders/OrderDiscription';
import PaymentHistory from './payments/PaymentHistory';
import PaymentDiscription from './payments/PaymentDiscription';

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="orderHistory"
          component={OrderHistory}
          options={{title: 'orderHistory'}}
        />
        <Stack.Screen
          name="orderDescription"
          component={OrderDiscription}
          options={{title: 'orderDescription'}}
        />
        <Stack.Screen
          name="PaymentHistory"
          component={PaymentHistory}
          options={{title: 'PaymentHistory'}}
        />
        <Stack.Screen
          name="PaymentDiscription"
          component={PaymentDiscription}
          options={{title: 'PaymentDiscription'}}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main;