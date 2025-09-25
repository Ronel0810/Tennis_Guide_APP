import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Saved() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved</Text>
      <Text style={styles.subtitle}>Your Tennis Favorites</Text>
      <Text style={styles.description}>
        This is the Saved tab. You can save favorite tennis tips, techniques, or articles here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0F0D23",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#A8B5DB",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#A8B5DB",
    textAlign: "center",
    lineHeight: 24,
  },
});
