import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = ({ navigation }) => {

    const logout = () => {
        AsyncStorage.removeItem('user').then(() => {
            alert('Logged out successfully')
            navigation.navigate('Login')
        })
    }
    return (
        <View style={styles.container}>
            
            <View style={{ paddingVertical: 15, paddingHorizontal:10, flexDirection: 'row', textAlign: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        color={'#fff'}
                        size={30}
                    />
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#fff', textAlign: 'center' ,paddingLeft: 15}}>
                    Settings
                </Text>
            </View>

            <View style={{paddingTop: 25,paddingBottom: 15, paddingHorizontal:10, flexDirection: 'row', textAlign: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <MaterialCommunityIcons
                        name="account"
                        color="#fff"
                        size={26} />   
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={{ fontSize: 20, color: '#fff', paddingLeft: 10 }}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={{paddingHorizontal:10, flexDirection: 'row', textAlign: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                    <MaterialCommunityIcons
                        name="lock-outline"
                        color="#fff"
                        size={26} />   
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
                    <Text style={{ fontSize: 20, color: '#fff', paddingLeft: 10 }}>Change Password</Text>
                </TouchableOpacity>
            </View>

            <View style={{paddingTop: 15,paddingHorizontal:10, flexDirection: 'row', textAlign: 'center', paddingLeft:13}}>
                <TouchableOpacity onPress={() => logout()}>
                    <MaterialCommunityIcons
                        name="logout"
                        color="#fff"
                        size={26} />   
                </TouchableOpacity>
                <TouchableOpacity onPress={() => logout()}>
                    <Text style={{ fontSize: 20, color: '#fff', paddingLeft: 10 }}>Log Out</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
})