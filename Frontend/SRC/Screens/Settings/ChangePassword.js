import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = ({ navigation }) => {

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handlePasswordChange = () => {
        if (oldPassword === '' || newPassword === '' || confirmNewPassword === '') {
            alert('Please fill all the fields')
        } else if (newPassword !== confirmNewPassword) {
            alert('New password and confirm new password must be same')
        }
        else {
            setLoading(true)
            AsyncStorage.getItem('user')

                .then(data => {
                    fetch('http://localhost/changePassword',
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "Authorization": 'Bearer ' + JSON.parse(data).tokens
                        },
                        body: JSON.stringify({ email: JSON.parse(data).user.email, oldPassword: oldPassword, newPassword: newPassword })
                    })
                        .then(res => res.json()).then(data => {
                            if (data.message == 'Password Changed Successfully') {
                                setLoading(false)
                                alert('Password Changed Successfully')
                                AsyncStorage.removeItem('user')
                                navigation.navigate('Login')
                            }
                            else {
                                alert('Wrong Password')
                                setLoading(false)
                            }
                        }
                        )
                })
        }
    }

    return (
        <View style={styles.container}>
            
            <View style={{ paddingTop: 15, paddingHorizontal:10, flexDirection: 'row', textAlign: 'center', backgroundColor:'black'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        color={'#fff'}
                        size={30}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.main} >
                <Text style={{ fontWeight: 'bold', fontSize: 50, color: '#fff' , textAlign: 'center',}}>
                    20
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 50, color: '#8A2BE2' , textAlign: 'center',}}>
                    20
                </Text>
            </View>

            <View style={{ marginVertical:12, fontSize: 20 }}>
                <Text style={styles.head}>
                    Change Password
                </Text>
            </View>

            <View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons
                        name="lock-outline"
                        size={20}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        placeholderTextColor="#a5a5a5"
                        placeholder="Enter Old password"
                        secureTextEntry
                        style={styles.inputLine} 
                        onChangeText={(text) => setOldPassword(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons
                        name="lock-outline"
                        size={20}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        placeholderTextColor="#a5a5a5"
                        placeholder="Enter New password"
                        secureTextEntry
                        style={styles.inputLine} 
                        onChangeText={(text) => setNewPassword(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons
                        name="lock-outline"
                        size={20}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        placeholderTextColor="#a5a5a5"
                        placeholder="Confirm New password"
                        secureTextEntry
                        style={styles.inputLine} 
                        onChangeText={(text) => setConfirmNewPassword(text)}
                    />
                </View>
            </View>
            <View style={styles.button2}>
                <Text style={{ color: '#fff', fontSize: 18 , paddingLeft:200,}} onPress={() => navigation.navigate('ForgotPassword_EnterEmail')}>
                    Forget Password?
                </Text>
            </View>
            {
                loading ? <ActivityIndicator size="large" color="white" /> :
                    <Text style={styles.button1}
                        onPress={() => handlePasswordChange()}
                    >
                        Next
                    </Text>
            }

        </View>
    )
}



export default ChangePassword

const styles = StyleSheet.create({
    container: {
        // width: '100%',
        // height: '100%',
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#000'
    },
    inputContainer: {
        flexDirection: 'row',
    },
    inputIcon: {
        marginTop: 15,
        position: 'absolute',
        color:'#a5a5a5',
        size:20
    },
    inputLine: {
        paddingLeft: 30,
        alignSelf: 'stretch',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        flex: 1,
        fontSize: 18,
        height: 50,
        marginBottom: 30,
        color: '#fff',
    },
    main: {
        flexDirection: 'row',
        marginTop: 70,
        textAlign: 'center',
        height: 70,
        resizeMode: 'contain',
        marginBottom: 20
    },
    button1: {
        height: 50,
        width: '100%',
        backgroundColor: '#8A2BE2',
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
        marginVertical: 10,
    },
    button2: {
        backgroundColor: '#000',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
    },
    head: {
        fontSize: 19,
        color: '#fff'
    },
})
