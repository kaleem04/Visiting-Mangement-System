import React from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
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
            <Text>This is Host page my name is kaleem</Text>
            
        </View>
    );
};

export default Host;
