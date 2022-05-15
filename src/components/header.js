/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Logo from '../../assets/images/Logo_1.png';

const Header = () => {
    return (
        <View style={styles.header}>

            <View style = {{flexDirection: 'row'}}>
                <Image source={Logo} style = {styles.logo} />
                <Text style={styles.headerText}>ParkyApp</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize:21,
        color: '#333',
        letterSpacing: 1,
        marginTop: '24%',
    },
    logo: {
        width: 51,
        height: 92,
    },
});

export default Header;
