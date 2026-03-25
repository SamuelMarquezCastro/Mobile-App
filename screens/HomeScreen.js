import React, { useState, useEffect } from "react";
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
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "": "alle categorieën",
  "699f04d48786422f5c2b343a": "Tshirt",
  "699ef99797a5763ef1998039": "Blogs",
};

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");


  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/698c7fb73c82c1b0af609e04/products", {
      headers: {
        authorization: "326809b6a1dd0d44ae83c6adacd81c9dee1bcb46deefa3ef83b9c6009d878362",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            subtitle: item.product.fieldData.description,
            price: Number(item.skus[0]?.fieldData?.price?.value ?? 0) / 100,
            image:
              item.product.fieldData?.["main-image"]?.url ||
              item.skus[0]?.fieldData?.["main-image"]?.url ||
              null,
            category:
              categoryNames[item.product.fieldData?.category?.[0]] ||
              "Onbekende categorie",
            description:
              item.product.fieldData?.description ||
              "Geen beschrijving beschikbaar.",
          })),
        );
      })
      .catch((error) => {
        console.log("Fetch error:", error);
      });
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      (selectedCategory === "" || product.category === selectedCategory) &&
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") {
      return a.price - b.price;
    }
    if (sortOption === "price-desc") {
      return b.price - a.price;
    }
    if (sortOption === "name-asc") {
      return a.title.localeCompare(b.title);
    }
    if (sortOption === "name-desc") {
      return b.title.localeCompare(a.title);
    }
    return 0;
  }
  );  


  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>SportWear Store</Text>

      <TextInput
        placeholder="Zoek sportkleding..."
        placeholderTextColor="#666"
        style={styles.search}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <Picker
        selectedValue={selectedCategory}
        onValueChange={setSelectedCategory}
        style={styles.picker}
      >
        <Picker.Item label="Alle categorieën" value="" />
        <Picker.Item label="Tshirt" value="Tshirt" />
        <Picker.Item label="Blogs" value="Blogs" />
      </Picker>

      <Picker
        selectedValue={sortOption}
        onValueChange={setSortOption}
        style={styles.picker}
      >
        <Picker.Item label="Prijs: Laag naar Hoog" value="price-asc" />  
        <Picker.Item label="Prijs: Hoog naar Laag" value="price-desc" />
        <Picker.Item label="Naam: A-Z" value="name-asc" /> 
        <Picker.Item label="Naam: Z-A" value="name-desc" />
      </Picker>

      <Text style={styles.sectionTitle}>Populaire producten</Text>

      <View style={styles.grid}>
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onPress={() =>
              navigation.navigate("Details", {
                title: product.title,
                description: product.description,
                price: product.price,
                image: product.image,
                category: product.category,
              })
            }
          />
        ))}

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

  picker: {
    backgroundColor: "white",
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
