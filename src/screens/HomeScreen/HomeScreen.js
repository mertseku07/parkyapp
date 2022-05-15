import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const HomeScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <MapView
                showsUserLocation={true}
                zoomEnabled={true}
                provider={PROVIDER_GOOGLE}
                style={{flex: 1}}
                region={{
                    latitude: 36.89585383289716,
                    longitude: 30.71221053500629,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                  }}

                />
        </SafeAreaView>
        
    );
}


export default HomeScreen;

