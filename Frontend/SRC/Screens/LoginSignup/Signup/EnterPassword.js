import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const EnterPassword = ({ navigation, route }) => {

    const { email, username } = route.params;
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const handlePassword = () => {

        if (password == '' || confirmPassword == '') {
            alert('Please enter password')
        } else if (password != confirmPassword) {
            alert('Password does not match')
        } else {
            setLoading(true)
            fetch('http://localhost/enterPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, username: username, password: password })
            }) .then(res => res.json()).then(
                data => {
                    if (data.message === "User Registered Successfully") {
                        setLoading(false)
                        alert(data.message);
                        navigation.navigate('Login')
                    } else {
                        setLoading(false)
                        alert("Please try again");
                    }
                }
            )
        }
    }
    return (
        <View style={styles.container}>
            
            <View style={{ paddingTop: 15, flexDirection: 'row', textAlign: 'center', backgroundColor:'black'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        color={'#fff'}
                        size={30}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.main} >
                <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#fff' , textAlign: 'center', marginTop: 30}}>
                    20
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#8A2BE2' , textAlign: 'center', marginTop: 30}}>
                    20
                </Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={styles.head}>
                    Choose a strong password
                </Text>
            </View>

            <View style={{ marginTop: 5 }}>
                
                <View style={styles.inputContainer}>
                    <MaterialIcons
                        name="lock-outline"
                        size={20}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        placeholderTextColor="#a5a5a5"
                        placeholder="Enter password"
                        style={styles.inputLine} 
                        secureTextEntry 
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <MaterialIcons
                        name="lock-outline"
                        size={20}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        placeholderTextColor="#a5a5a5"
                        placeholder="Confirm password"
                        style={styles.inputLine} 
                        secureTextEntry 
                        onChangeText={(text) => setConfirmPassword(text)}
                    />
                </View>

            </View>

            <Text style={styles.button} onPress={() => handlePassword()}>
                Next
            </Text>

        </View>
    )
}

export default EnterPassword

const styles = StyleSheet.create({
        main: {
        flexDirection: 'row',
        marginTop: 180,
        textAlign: 'center',
        height: 70,
        resizeMode: 'contain',
    },
    container: {
        // width: '100%',
        // height: '100%',
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#000'
    },
    inputContainer: {
        flexDirection: 'row',
        marginTop: 20
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
    button: {
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
    head: {
        fontSize: 19,
        color: '#fff'
    },
})