import React from "react";
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


export default function ProductCard({ title, price, image, onPress }) {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>

      <Image
        source={{image}}
        style={styles.image}
      />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Bekijk</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: "#1f1f1f",
    padding: 15,
    borderRadius: 12,
    width: 160,
    marginBottom: 20,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },

  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 5,
  },

  price: {
    color: "#00ff9c",
    fontWeight: "bold",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#ff3c38",
    padding: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },

});