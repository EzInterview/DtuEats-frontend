import React from 'react';
import { View, Text, FlatList } from 'react-native';
import tw from 'twrnc';

const OrderDescription = () => {
  const orderDetails = {
    orderId: '12345',
    orderDate: '2024-06-10',
    items: [
      { id: '1', name: 'Item 1', quantity: 2, price: 10.00 },
      { id: '2', name: 'Item 2', quantity: 1, price: 20.00 },
      { id: '3', name: 'Item 3', quantity: 3, price: 15.00 },
    ],
    totalPrice: 85.00,
  };

  const renderItem = ({ item }) => (
    <View style={tw`p-4 mb-4 bg-gray-100 rounded`}>
      <Text style={tw`text-lg`}>{item.name}</Text>
      <Text style={tw`text-base`}>Quantity: {item.quantity}</Text>
      <Text style={tw`text-base`}>Price: ${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={tw`p-4`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Order Description</Text>
      <Text style={tw`text-lg mb-2`}>Order ID: {orderDetails.orderId}</Text>
      <Text style={tw`text-lg mb-4`}>Order Date: {orderDetails.orderDate}</Text>

      <FlatList
        data={orderDetails.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={tw`mb-4`}
      />

      <Text style={tw`text-xl font-bold`}>Total Price: ${orderDetails.totalPrice.toFixed(2)}</Text>
    </View>
  );
};

export default OrderDescription;
