import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const BlogCard = ({ title, image, excerpt, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.excerpt} numberOfLines={2}>
          {excerpt}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1c1c1c",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 20,
    width: "100%",
  },

  image: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },

  content: {
    padding: 14,
  },

  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  excerpt: {
    color: "#bbb",
    fontSize: 14,
    lineHeight: 20,
  },
});

export default BlogCard;