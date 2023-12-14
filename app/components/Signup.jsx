import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import constants from "../constants/constant.style";
import { useState } from "react";
import { Link, router } from "expo-router";

import { Dropdown } from 'react-native-element-dropdown';


export default function Signup() {
  const [selectedLanguage, setSelectedLanguage] = useState("android");
  let routing = () => {
   
    if(value == "select user type" || value == null){
      alert("Please select user type")
    }
    else{
      router.push(`/components/${value}`)
    }

  };
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  const data = [
    {label: "select user type", value: "select user type"},
    { label: 'Client', value: 'Client' },
    { label: 'Host', value: 'Host' },
  ];

  return (
    <View style={constants.container}>
      <Image
        source={require("../assets/images/logo.jpg")}
        style={styles.logo}
      />
      <TextInput style={styles.input} placeholder="Write Full Name" />
      <TextInput style={styles.input} placeholder="Write Email Address" />
      <TextInput style={styles.input} placeholder="Write Contact Number" />
      {/* <Text>Hello asdfasdfsdf</Text> */}

      <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
  
          maxHeight={300}
          labelField="label"
          valueField="value"

          placeholder={!isFocus ? 'select user type' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />








      <Text style={styles.mt10}>
        Already have an Account  <Link style={styles.link} href={"/components/Login"}>
          Login
              </Link>
           
      </Text>
      <TouchableOpacity style={constants.button}>
        <Text style={constants.buttonText} onPress={routing}>
           Signup
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
    marginTop: 10,
    marginBottom: 10,
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
    fontWeight: 900,
    textDecorationLine: "underline",
  },
  dropdown: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: "90%"
  },
  mt10: {
    marginTop: 10,
  },  
});
