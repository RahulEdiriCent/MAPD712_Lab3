import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from "react-native";
import Lab3Component from './components/Lab3Component';
//
//<Text>Open up App.js to start working on your app!</Text>
//<StatusBar style="auto" />
//
export default function App() {
    return (
        <View style = {styles.container}>
            <Lab3Component/>
        </View>   
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
