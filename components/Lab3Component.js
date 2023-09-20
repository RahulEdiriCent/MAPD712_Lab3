import React from "react";
import { View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from "react-native";

export default function Lab3Component(){
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");

    const clearDetails = () =>{
        setFirstName("");
        setLastName("");
        setEmail("");
    }
    const sendClicked = () =>{
        //alert('The Button Component Clicked');
        alert(`Thank you for entring your details: ${firstName} ${lastName} : ${email}`)
        //clearDetails();
    }

    const clearClicked= () =>{
        alert('Details Cleared');
        clearDetails();
    }
    
    return (
        <View style = {styles.container}>
          <Text style={styles.heading}>REGISTRATION</Text>
            <Text>Contact Details:</Text>
            
            <TextInput style={styles.entryBox}
            placeholder = "Enter your First Name"
            value={firstName}
            onChangeText= {firstName=> setFirstName(firstName)}/>

            <TextInput style={styles.entryBox} 
            placeholder = "Enter your Last Name"
            value={lastName}
            onChangeText= {lastName=> setLastName(lastName)}/>

            <TextInput style={styles.entryBox} 
            placeholder = "Enter your Email"
            value={email}
            onChangeText= {email=> setEmail(email)}/>
            <Text></Text>
            <Button onPress={sendClicked} title = "Send Details"></Button>

            <TouchableOpacity onPress = {clearClicked}>
                <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity> 
            {/* <Text>Hello</Text> */}
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

    heading:{
      fontSize: 30,
      margin: 15,
    },

    clearText: {
        color: '#f8073e',
        fontSize: 16,
        borderWidth: 1,
        paddingLeft:38,
        paddingRight:38,
        borderColor: '#f8073e',
        margin: 1,
    },

    entryBox: {
      borderColor: '#000',
      borderWidth: 1,
      padding: 3,
      margin:2,
      minWidth: 225,
      borderRadius: 10,
    }
  });