import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import constants from "../constants/constant.style";
import { Link } from "expo-router";


export default function Login() {
  return (
    <View style={constants.container}>
      <Stack.Screen
        options={{
          title: "Login",
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
      <Image
        source={require("../assets/images/logo.jpg")}
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="Write Full Name" />
      <TextInput style={styles.input} placeholder="Write Email Address" />
      <Text style={styles.mt10}>
        Do not have account  <Link style={styles.link} href={"/components/Signup"}>
          Signup
        </Link>
      </Text>

      <TouchableOpacity style={constants.button}>
        <Text style={constants.buttonText} onPress={() => { }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 200,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 10,
  },
  picker: {
    width: "100%",
    borderWidth: 1,
    backgroundColor: "green",
  },
  pickertext: {
    color: "black",
  },
  link: {
    color: "#0071bd ",
    fontWeight: "bold",
  },
});
