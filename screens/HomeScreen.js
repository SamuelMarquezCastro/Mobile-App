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
import BlogCard from "../components/BlogCard";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>SportWear Store</Text>

      <TextInput
        placeholder="Zoek sportkleding..."
        placeholderTextColor="#666"
        style={styles.search}
      />

      <Text style={styles.sectionTitle}>Populaire producten</Text>

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

      <Text style={styles.sectionTitle}>Blogs</Text>

      <BlogCard
        title="5 tips voor een betere hardlooptraining"
        image="https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=800&q=80"
        excerpt="Ontdek hoe je slimmer traint, blessures voorkomt en meer uit je hardloopsessies haalt."
        onPress={() =>
          navigation.navigate("BlogDetail", {
            title: "5 tips voor een betere hardlooptraining",
            image:
              "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=800&q=80",
            author: "Admin",
            date: "25 maart 2026",
            content:
              "Een goede hardlooptraining begint met een degelijk plan. Start altijd met een korte warming-up zodat je spieren klaar zijn voor inspanning. Draag ademende sportkleding en schoenen die voldoende ondersteuning bieden. Bouw je tempo rustig op en luister goed naar je lichaam. Vergeet ook niet om voldoende water te drinken voor en na het lopen. Eindig je training met een cooling-down en lichte stretches om sneller te herstellen.",
          })
        }
      />

      <BlogCard
        title="Waarom goede sportkleding belangrijk is"
        image="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80"
        excerpt="Goede sportkleding helpt je comfortabeler te bewegen en beter te presteren tijdens elke workout."
        onPress={() =>
          navigation.navigate("BlogDetail", {
            title: "Waarom goede sportkleding belangrijk is",
            image:
              "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
            author: "Admin",
            date: "25 maart 2026",
            content:
              "Sportkleding is meer dan alleen stijl. De juiste stof voert zweet af, voorkomt irritatie en geeft je meer bewegingsvrijheid. Tijdens het sporten wil je niet afgeleid worden door kleding die knelt of te warm aanvoelt. Kwalitatieve sportkleding ondersteunt jouw prestaties en zorgt ervoor dat je comfortabel blijft trainen, of je nu rent, fitness doet of buiten sport.",
          })
        }
      />

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

  sectionTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 10,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default HomeScreen;