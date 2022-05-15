/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Button} from 'react-native';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { TouchableOpacity } from 'react-native-gesture-handler';



const ProfileScreen = () => {


  const [currentUser, setCurrentUser] = useState()
  
  useEffect(()=>{
    auth().onAuthStateChanged((user)=>{
      setCurrentUser(user)
    })
  })



    
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
            <ScrollView 
            style={styles.container} 
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
            showsVerticalScrollIndicator={false}>
                <Image 
                style={styles.userImg} 
                source={require('../../../assets/users/dungeon.png')}
                 />
                <Text style={styles.userName}>Mert Sekü</Text>
                <Text style={styles.aboutUser}>MERT SEKÜ 3cm</Text>
                {currentUser && <Text>{currentUser.email}</Text>}
                {currentUser && <Text>{currentUser.uid}</Text>}
                <View style = {styles.userBtnWrapper}>
                    <TouchableOpacity style={styles.userBtn}>
                        <Text style={styles.userBtnTxt} onPress={()=>{}}>Edit Profile</Text>
                    </TouchableOpacity>

                </View>
                
                
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    userImg: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
      },
      aboutUser: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        textAlign: 'center',
        marginBottom: 10,
      },
      userBtnWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 10,
      },
      userBtn: {
        borderColor: '#2e64e5',
        borderWidth: 2,
        borderRadius: 3,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginHorizontal: 5,
      },
      userBtnTxt: {
        color: '#2e64e5',
      },
      userInfoWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
      },
      userInfoItem: {
        justifyContent: 'center',
      },
      userInfoTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
      },
      userInfoSubTitle: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
      },

})



export default ProfileScreen;
