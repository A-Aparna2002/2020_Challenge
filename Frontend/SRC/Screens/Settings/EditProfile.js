import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EditProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <View style={{ paddingVertical: 40, paddingHorizontal:10, flexDirection: 'row', textAlign: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        color={'#fff'}
                        size={30}
                    />
                </TouchableOpacity>
                <Text style={{ fontWeight: 'bold', fontSize: 22, color: '#fff', textAlign: 'center' ,paddingLeft: 15}}>
                    Edit Profile
                </Text>
            </View>

            <View style={{paddingTop: 25,paddingBottom: 15, paddingHorizontal:10, flexDirection: 'row', textAlign: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('UploadProfilePicture')}>
                    <MaterialCommunityIcons
                        name="account"
                        color="#fff"
                        size={26} />   
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('UploadProfilePicture')}>
                    <Text style={{ fontSize: 20, color: '#fff', paddingLeft: 10 }}>Upload Profile Picture</Text>
                </TouchableOpacity>
            </View>

            <View style={{paddingHorizontal:10, flexDirection: 'row', textAlign: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('ChangeUsername')}>
                    <MaterialCommunityIcons
                        name="lock-outline"
                        color="#fff"
                        size={26} />   
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ChangeUsername')}>
                    <Text style={{ fontSize: 20, color: '#fff', paddingLeft: 10 }}>Change Username</Text>
                </TouchableOpacity>
            </View>

            <View style={{paddingTop: 15,paddingHorizontal:10, flexDirection: 'row', textAlign: 'center', paddingLeft:13}}>
                <TouchableOpacity onPress={() => navigation.navigate('ChangeDescription')}>
                    <MaterialCommunityIcons
                        name="logout"
                        color="#fff"
                        size={26} />   
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ChangeDescription')}>
                    <Text style={{ fontSize: 20, color: '#fff', paddingLeft: 10 }}>Change Description</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    txt1: {
        marginTop: 20,
        color: 'white',
        fontSize: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    }
})
