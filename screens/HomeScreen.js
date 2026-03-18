import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";

import ProductCard from "../components/ProductCard";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>SportWear Store</Text>

      <TextInput
        placeholder="Zoek sportkleding..."
        placeholderTextColor="#666"
        style={styles.search}
      />

      <View style={styles.grid}>
        <ProductCard
          title="Nike Running Shirt"
          price="35"
          image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
          onPress={() =>
            navigation.navigate("Details", {
              title: "Nike Running Shirt",
              price: "35",
              image:
                "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
              description:
                "Dit comfortabele Nike Running Shirt is perfect voor je dagelijkse training. Het ademende materiaal houdt je droog en zorgt voor maximale bewegingsvrijheid.",
              category: "Running",
            })
          }
        />
      </View>

      <StatusBar style="light" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    padding: 20,
    paddingTop: 60,
    flex: 1,
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

export default HomeScreen;