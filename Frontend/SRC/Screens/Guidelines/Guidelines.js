import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNavbar from '../../Components/BottomNavbar';
import Rules from './Rules';
import TopNavbar from '../../Components/TopNavbar';

const Guidelines = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar />
            <TopNavbar navigation={navigation} page={"Guidelines"} />
                <View style={styles.container1}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#fff', marginBottom: 20,paddingRight: 190 }}>GUIDELINES</Text>
                    <Text style={{ fontSize: 16, color: '#fff' }}>{Rules}</Text>
                    <StatusBar style="auto" />
                </View>
            <BottomNavbar navigation={navigation} page={"Guidelines"} />
        </View>
    )
}

export default Guidelines

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    container1: {
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150,
        paddingHorizontal: 10
    },
});