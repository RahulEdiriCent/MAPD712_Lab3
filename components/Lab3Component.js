import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity} from "react-native"

export default function Lab3Component(){
    const [firstName, setFirstName] = React.useState;
    const [lastName, setLastName] = React.useState;
    const [email, setEmail] = React.useState;

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
        <View>
            <TextInput placeholder = "Enter your First Name"
            onChangText= {firstName=> setFirstName(firstName)}/>

            <TextInput placeholder = "Enter your Last Name"
            onChangText= {lastName=> setLastName(lastName)}/>

            <TextInput placeholder = "Enter your Email"
            onChangText= {email=> setEmail(email)}/>

            <Button onPress={sendClicked} title = "Click Me Button"></Button>

            <TouchableOpacity onPress = {clearClicked}>
                <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity> 
        </View>   
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    clearText: {
        color: '#f8073e'
    }
  });