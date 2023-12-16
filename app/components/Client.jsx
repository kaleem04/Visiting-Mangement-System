import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Stack } from 'expo-router';
import constants from '../constants/constant.style';
import { ScrollView } from 'react-native-gesture-handler';
import { UserInterfaceIdiom } from 'expo-constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import {BlurView} from '@react-native-community/blur';

const Client = () => {
    return (
        <ScrollView style={styles.container}>
            <SafeAreaView style = {styles.safearea}>
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
            
               <View style={styles.profilecontainer}>
                    <View style={styles.imagecontainer}>
                        <Image source={{
                            uri: "https://lh3.googleusercontent.com/a/ACg8ocL--3WgdZTm3X5fnWPE7nV3zNHcX760uH9_-mlSfj-y85I=s432-c-no"
                        }}
                            style={styles.profileimage}
                        />
                    </View>
                    <View style={styles.profileData}>
                        <View style={styles.profileDiscription}>
                            <Text style={styles.profileDiscriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam iusto deserunt distinctio minima fugia</Text>
                        </View>
                        <View style={styles.profileButtonContainer}>
                            <TouchableOpacity style={[constants.button,styles.button]}>
                                <Text style={styles.buttonText}>
                                    Meetup
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[constants.button,styles.button]}>
                                <Text style={styles.buttonText}>
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={styles.profilecontainer}>
                    <View style={styles.imagecontainer}>
                        <Image source={{
                            uri: "https://lh3.googleusercontent.com/a/ACg8ocL--3WgdZTm3X5fnWPE7nV3zNHcX760uH9_-mlSfj-y85I=s432-c-no"
                        }}
                            style={styles.profileimage}
                        />
                    </View>
                    <View style={styles.profileData}>
                        <View style={styles.profileDiscription}>
                            <Text style={styles.profileDiscriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam iusto deserunt distinctio minima fugia</Text>
                        </View>
                        <View style={styles.profileButtonContainer}>
                            <TouchableOpacity style={[constants.button,styles.button]}>
                                <Text style={styles.buttonText}>
                                    Meetup
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[constants.button,styles.button]}>
                                <Text style={styles.buttonText}>
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            
                <View style={styles.profilecontainer}>
                    <View style={styles.imagecontainer}>
                        <Image source={{
                            uri: "https://lh3.googleusercontent.com/a/ACg8ocL--3WgdZTm3X5fnWPE7nV3zNHcX760uH9_-mlSfj-y85I=s432-c-no"
                        }}
                            style={styles.profileimage}
                        />
                    </View>
                    <View style={styles.profileData}>
                        <View style={styles.profileDiscription}>
                            <Text style={styles.profileDiscriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam iusto deserunt distinctio minima fugia</Text>
                        </View>
                        <View style={styles.profileButtonContainer}>
                            <TouchableOpacity style={[constants.button,styles.button]}>
                                <Text style={styles.buttonText}>
                                    Meetup
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[constants.button,styles.button]}>
                                <Text style={styles.buttonText}>
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                <View style={styles.profilecontainer}>
                    <View style={styles.imagecontainer}>
                        <Image source={{
                            uri: "https://lh3.googleusercontent.com/a/ACg8ocL--3WgdZTm3X5fnWPE7nV3zNHcX760uH9_-mlSfj-y85I=s432-c-no"
                        }}
                            style={styles.profileimage}
                        />
                    </View>
                    <View style={styles.profileData}>
                        <View style={styles.profileDiscription}>
                            <Text style={styles.profileDiscriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam iusto deserunt distinctio minima fugia</Text>
                        </View>
                        <View style={styles.profileButtonContainer}>
                            <TouchableOpacity style={[constants.button,styles.button]}>
                                <Text style={styles.buttonText}>
                                    Meetup
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[constants.button,styles.button]}>
                                <Text style={styles.buttonText}>
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                     
                <View style={styles.profilecontainer}>
                    <View style={styles.imagecontainer}>
                        <Image source={{
                            uri: "https://lh3.googleusercontent.com/a/ACg8ocL--3WgdZTm3X5fnWPE7nV3zNHcX760uH9_-mlSfj-y85I=s432-c-no"
                        }}
                            style={styles.profileimage}
                        />
                    </View>
                    <View style={styles.profileData}>
                        <View style={styles.profileDiscription}>
                            <Text style={styles.profileDiscriptionText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt totam iusto deserunt distinctio minima fugia</Text>
                        </View>
                        <View style={styles.profileButtonContainer}>
                            <TouchableOpacity style={[constants.button,styles.button]}>
                                <Text style={styles.buttonText}>
                                    Meetup
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[constants.button,styles.button]}>
                                <Text style={styles.buttonText}>
                                    Remove
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

                </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        padding: 20,
        height: "100%"
    },
    profilecontainer: {
        flex: 1,
        height: 150,
        width: 330,
        backgroundColor: "lightgrey",
        marginTop: 20,
        flexDirection: "row",
        borderRadius: 10,
        
        
   },
    imagecontainer: {
        width: 110,
        alignItems: "center",
        justifyContent: "center"
    },
    profileimage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    profileData: {
        padding: 10,
        paddingBottom: 10,
        width: "100%"
    },
    profileDiscription: {
        width: 175,
    },
    profileButtonContainer: {
        flexDirection: 'row',
        paddingBottom: 20,
    
    },
    profileDiscriptionText: {
        fontSize: 13,
        fontWeight: "bold",
    }, 
    button:{
        marginHorizontal:5,
        borderRadius: 10,
        paddingRight    : 10,
        width: 90,
        height: 40,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        fontFamily: 'Roboto'
       
     
    },
    safearea:{
        flex:1,
        paddingBottom: 40,
        height: "100%"
    }
});
  





export default Client;
