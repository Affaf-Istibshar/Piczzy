import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("MainTabs");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigation]);


}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#4CAF50" },
  logo: { fontSize: 32, fontWeight: "bold", color: "#fff" },
});
