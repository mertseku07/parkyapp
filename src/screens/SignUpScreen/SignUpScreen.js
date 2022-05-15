/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';



const SignUpscreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const navigation = useNavigation();

    const  onRegisterPressed = () => {

        if (!username) {
            Alert.alert('Error',"Username required *")
            return
          }else if(!email){
            Alert.alert('Error', "Email required *")
          }
           else if (!password && password.trim()) {
            Alert.alert('Error',"Weak password, minimum 6 chars")
            return
          } 
         
          else {
            __doCreateUser(username, email, password)
            return
          } 
        }
        const __doCreateUser = async () => {
          try {
            let response = await auth().createUserWithEmailAndPassword(email, password).then((userCredential)=>{
              const user = userCredential.user;
              if(response){
                console.log(response)
              }
              database().ref('users/' + user.uid).set({ //KULLANICI VERILERINI REALTIME DATABASE E YAZDIRMA
                username: username,
                email: email,
                type: "mobile",
              })
              navigation.navigate('Home');
              Alert.alert('WELCOME', 'TO THE PARKYAPP');
            })

          } catch (e) {
            console.error(e.message)
          }

        };
    
    const onSignInPressed = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
        
        <Text style={styles.title}>Create an Acoount</Text>

        <CustomInput 
         placeholder="Username" 
         value={username} 
         setValue={setUsername} />

        <CustomInput 
         placeholder="Email" 
         value={email} 
         setValue={setEmail} />

        <CustomInput
         placeholder="Password"
         value={password} 
         setValue={setPassword}
         secureTextEntry
         />

        <CustomButton text="Register" onPress={onRegisterPressed} />

        <CustomButton
         text="You have an account? Sign in" 
         onPress={onSignInPressed} 
         type="TERTIARY" />

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,

    },
});

export default SignUpscreen;
