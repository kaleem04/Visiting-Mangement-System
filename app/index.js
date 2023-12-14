import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Link, Stack, Tabs, router } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import constants from "./constants/constant.style";
import Signup from "./components/Signup.jsx";

export default function index() {
  // let navigatefunc = () => {
  //   router.push("/components/user");
  // };
  return (
    <ScrollView style={styles.mainContainer}>
      <SafeAreaView>
        <View>
          <Stack.Screen
            options={{
              title: "Sign up",
              headerStyle: {
                backgroundColor: "#0071bd",
              },
              headerShadowVisible: false,
              headerTitleStyle: {
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              },
            }}
          />
          <Signup />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 5,
    margin: 10,
  },
  btnTxt: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  mainContainer: {
    backgroundColor: "white",
  },
});
