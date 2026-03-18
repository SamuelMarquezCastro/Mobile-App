import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";


import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen.js";
import ProductDetail from "./screens/ProductDetail.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
     <Stack.Screen name ="Home" component={HomeScreen}/>
     <Stack.Screen name ="Details" component={ProductDetail}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}

