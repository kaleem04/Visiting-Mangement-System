import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
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

            <Text>Hello this is Client page!</Text>
           



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20,
        height: "100%"
    },

});



export default Client;
