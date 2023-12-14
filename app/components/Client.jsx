import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Stack } from 'expo-router';
import constants from '../constants/constant.style';

const Client = () => {
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: "Client",
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

            <Text>Hello, this is the Client page!</Text>
         
           
            <Image
                source={{ uri: "https://lh3.googleusercontent.com/a/ACg8ocL--3WgdZTm3X5fnWPE7nV3zNHcX760uH9_-mlSfj-y85I=s432-c-no" }}
                style={styles.image}
            /> 
            <Text>User Details .</Text>

            <View style={styles.buttonContainer}>
                <Button style={styles.button}    
                    title="Meet"
                    onPress={() => {
                        // Handle button 1 press
                    }}
                />
                <Button 
                    title="Remove"
                    onPress={() => {
                        // Handle button 2 press
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        height: "100%"
    },
    image: {
        width: 100,
        height: 100,
        marginTop: 20,
        marginBottom: 7,
        borderRadius: 50,
        borderColor: "green",
       
        
        
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        width: "70%",
        height: 40,
        alignContent: "center",
        borderRadius: 10,
        backgroundColor: "green",
        
    },
    button: {
        width: "40%",
        height: 40,
        alignContent: "center",
        borderRadius: 10,
        backgroundColor: "green",
    },
   
   
});
  





export default Client;
