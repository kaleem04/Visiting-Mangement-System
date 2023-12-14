import React from 'react';
import { View, } from 'react-native';
import { Stack } from 'expo-router';

import constants from '../constants/constant.style';
const Host = () => {
    return (
        <View>
            <Stack.Screen
                options={{
                    title: "Host",
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
            

            
        </View>
    );
};






export default Host;
