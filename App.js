import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

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
    <ScrollView contentContainerStyle={styles.container}>
      {shops.map((shop) => (
        <View key={shop.id} style={styles.shopContainer}>
          <Text style={styles.shopName}>{shop.name}</Text>
          <Text style={styles.shopLocation}>{shop.location}</Text>
          <View style={styles.menuContainer}>
            {shop.menu.map((menuItem, index) => (
              <TouchableOpacity key={index} style={styles.menuItem} onPress={() => handleOrder(menuItem.item, shop.name)}>
                <Text style={styles.itemName}>{menuItem.item}</Text>
                <Text style={styles.itemPrice}>{menuItem.price}</Text>
                <Text style={styles.orderButton}>Order</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  shopContainer: {
    marginBottom: 20,
  },
  shopName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  shopLocation: {
    marginBottom: 10,
  },
  menuContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  menuItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemName: {
    flex: 1,
    fontWeight: 'bold',
  },
  itemPrice: {
    marginRight: 10,
  },
  orderButton: {
    color: 'blue',
  },
});

export default Home;
