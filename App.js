import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const Home = () => {
  // Sample data for multiple shops and their menus with price and location
  const [shops] = useState([
    {
      id: 1,
      name: 'Shop A',
      location: '123 Main St, City',
      menu: [
        { item: 'Burger', price: '$5.99' },
        { item: 'Pizza', price: '$8.99' },
        { item: 'Fries', price: '$2.99' },
      ],
    },
    {
      id: 2,
      name: 'Shop B',
      location: '456 Elm St, Town',
      menu: [
        { item: 'Sandwich', price: '$6.49' },
        { item: 'Salad', price: '$7.99' },
        { item: 'Smoothie', price: '$4.99' },
      ],
    },
    {
      id: 3,
      name: 'Shop C',
      location: '789 Oak St, Village',
      menu: [
        { item: 'Pasta', price: '$9.99' },
        { item: 'Sushi', price: '$12.99' },
        { item: 'Ice Cream', price: '$3.99' },
      ],
    },
  ]);

  // Function to handle order button press
  const handleOrder = (item, shopName) => {
    // Here you can implement your order logic
    console.log('Order placed for:', item, 'from', shopName);
  };

  return (
    <ScrollView className="flex-grow p-5">
      {shops.map((shop) => (
        <View key={shop.id} className="mb-5">
          <Text className="text-lg font-bold mb-1 text-blue-700">{shop.name}</Text>
          <Text className="mb-3">{shop.location}</Text>
          <View className="flex flex-row flex-wrap">
            {shop.menu.map((menuItem, index) => (
              <TouchableOpacity 
                key={index} 
                className="bg-gray-200 p-2 rounded-lg mr-2 mb-2 flex flex-row items-center" 
                onPress={() => handleOrder(menuItem.item, shop.name)}
              >
                <Text className="flex-1 font-bold">{menuItem.item}</Text>
                <Text className="mr-2">{menuItem.price}</Text>
                <Text className="text-blue-500">Order</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Home;
