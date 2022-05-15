/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';


const SignInscreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const  onSignInPressed = async() =>{
        try {
            let response = await auth().signInWithEmailAndPassword(email, password)
            if (response) {
              console.log(response)
              navigation.navigate('Home');

            }
          } catch (e) {
            console.error(e.message)
          }


    }
    
    const onSignUpPressed =() =>{
        console.warn("Sign Up");

        navigation.navigate('SignUp');
    }

    const onOwnerPressed =() =>{
        navigation.navigate('Webview')
    }
    


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
            <Image source={Logo} style = {styles.logo, {height: height * 0.33}} resizeMode="contain" />
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

        <CustomButton text="Sign In" onPress={onSignInPressed} />

        <CustomButton
         text="Don't have an account? Create one" 
         onPress={onSignUpPressed} 
         type="TERTIARY" />

        <CustomButton
         text="If you are a parking lot owner, Click here" 
         onPress={onOwnerPressed} 
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

});

export default SignInscreen;
