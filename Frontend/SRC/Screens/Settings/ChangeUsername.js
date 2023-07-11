import { Text, View, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangeUsername = ({ navigation }) => {

    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)

    const handleUsername = () => {
        if (username == '') {
            alert('Please enter username')
        }
        else {
            setLoading(true)
            AsyncStorage.getItem('user')
                .then(data => { 
                    fetch('http://localhost/setUsername', 
                    {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            username: username
                        })
                    })
                        .then(res => res.json())
                        .then(
                            data => {
                                if (data.message === "Username Updated Successfully") {
                                    setLoading(false)
                                    alert('Username has been set successfully')
                                    navigation.navigate('EditProfile')
                                }
                                else if (data.error === "Invalid Credentials") {
                                    alert('Invalid Credentials')
                                    setLoading(false)
                                    navigation.navigate('Login')
                                }
                                else {
                                    setLoading(false)
                                    alert("Username not available");
                                }
                            }
                        )
                        .catch(err => {
                            alert('Something went wrong')
                            setLoading(false)
                        })
                })
                .catch(err => {
                    alert('Something went wrong')
                    setLoading(false)
                }
                )
        }

        // navigation.navigate('Signup_ChoosePassword')
    }

    return (
        <View style={styles.container}>
            <View style={{ paddingTop: 15, paddingHorizontal:10, flexDirection: 'row', textAlign: 'center', backgroundColor:'black'}}>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
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
            <View style={{ marginTop: 10 }}>
                <Text style={styles.head}>
                    Change a Username
                </Text>
            </View>
            <View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons
                        name="account"
                        size={20}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        placeholderTextColor="#a5a5a5"
                        placeholder="Enter a username"
                        style={styles.inputLine} 
                        onChangeText={(text) => setUsername(text)}
                    />
                </View>
            </View>
            {
                loading ? <ActivityIndicator /> :
                    <Text style={styles.button} onPress={() => handleUsername()}> Save </Text>
            }
        </View>
    )
}

export default ChangeUsername

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
    main: {
        flexDirection: 'row',
        marginTop: 180,
        textAlign: 'center',
        height: 70,
        resizeMode: 'contain',
    },
    head: {
        fontSize: 19,
        color: '#fff'
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
})
