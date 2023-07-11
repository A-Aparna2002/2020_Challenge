import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const EnterUsername = ({ navigation, route }) => {

    const { email } = route.params
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)

    const handleUsername = () => {
        if (username == '') {
            alert('Please enter username')
        } else {
            setLoading(true)
            fetch('http://localhost/enterUsername', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    username: username
                })
            }).then(res => res.json()).then(
                data => {
                    if (data.message === "Username Available") {
                        setLoading(false)
                        alert('Username set successfully')
                        navigation.navigate('EnterPassword', { email: email, username: username })
                    } else {
                        setLoading(false)
                        alert("Username not available");
                    }
                }
            ).catch(err => {
                console.log(err)
            })
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
                    Choose a Username
                </Text>
            </View>

            <View style={{ marginTop: 5 }}>
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
                    <Text style={styles.button} onPress={() => handleUsername()}>
                        Next
                    </Text>
            }
        </View>
    )
}

export default EnterUsername

const styles = StyleSheet.create({
        main: {
        flexDirection: 'row',
        marginTop: 180,
        textAlign: 'center',
        height: 70,
        resizeMode: 'contain',
    },
    container: {
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