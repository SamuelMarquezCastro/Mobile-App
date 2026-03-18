import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";

import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>SportWear Store</Text>

      <TextInput
        placeholder="Zoek sportkleding..."
        style={styles.search}
      />

      <View style={styles.grid}>

        <ProductCard
          title="Nike Running Shirt"
          price="€35"
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
        />

        <ProductCard
          title="Adidas Training Hoodie"
          price="€65"
          image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        />

        <ProductCard
          title="Gym Compression Shirt"
          price="€29"
          image="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
        />

        <ProductCard
          title="Sport Shorts"
          price="€30"
          image="https://images.unsplash.com/photo-1518459031867-a89b944bffe4"
        />

        <ProductCard
          title="Running Jacket"
          price="€89"
          image="https://images.unsplash.com/photo-1520975916090-3105956dac38"
        />

        <ProductCard
          title="Fitness Tank Top"
          price="€25"
          image="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
        />

      </View>

      <StatusBar style="light" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#111",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  search: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

});