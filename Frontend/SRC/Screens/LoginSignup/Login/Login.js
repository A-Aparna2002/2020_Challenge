import { StyleSheet, Text, View, TextInput, ActivityIndicator} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const handleLogin = () => {
        if (email == '' || password == '') {
            alert('Please add all the fields')
        } else {
            setLoading(true)
            fetch('http://localhost/login',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            .then(res => res.json())
            .then(async data => {
                if (data.error) {
                    setLoading(false)
                    alert(data.error)
                } else if (data.message == 'SignIn Successful') {
                    setLoading(false)
                    await AsyncStorage.setItem('user', JSON.stringify(data))
                    navigation.navigate('MainPage', { data })
                }
            })
            .catch(err => {
                setLoading(false)
                alert(err)
            })
        }
    }
    return (
        <View style={styles.container}>
            
            <View style={styles.main}>
                <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#fff' , textAlign: 'center'}}>
                    20
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#8A2BE2' , textAlign: 'center'}}>
                    20
                </Text>
            </View>

            <View style={{ marginTop: 10 }}>
                <Text style={styles.head1}>
                    Welcome Back!
                </Text>
                <Text style={styles.head2}>
                    Sign in to continue
                </Text>
            </View>

            <View style={{ marginTop: 20 }}>
                
                <View style={styles.inputContainer}>
                    <Icon
                        name="mail-outline"
                        size={20}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        placeholderTextColor="#a5a5a5"
                        placeholder="Email"
                        style={styles.inputLine}
                        keyboardType="email-address" 
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon
                        name="lock-outline"
                        size={20}
                        style={styles.inputIcon}
                    />
                    <TextInput
                        placeholderTextColor="#a5a5a5"
                        placeholder="Password"
                        style={styles.inputLine}
                        secureTextEntry 
                        onChangeText={(text) => setPassword(text)}
                        />
                </View>

                {
                    loading ?
                        <ActivityIndicator size="large" color="white" />
                        :
                        <Text style={styles.button1} onPress={() => handleLogin()}>
                            Submit
                        </Text>
                }
                
                <View style={{ color: '#fff', flexDirection: 'row', justifyContent: 'space-between' }}>
                    
                    <View style={styles.button2}>
                        <Text style={{ color: '#fff', fontSize: 18 }}
                            onPress={() => navigation.navigate('FPEnterEmail')}>
                                Forget Password?
                        </Text>
                    </View>

                    <View style={styles.button2}>
                        <Text style={{ color: '#fff', fontSize: 18 }}
                            onPress={() => navigation.navigate('MainPage')}>
                                Continue as Guest
                        </Text>
                    </View>

                </View>

            </View>

            <View style={{color: '#fff', marginVertical: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.line}></View>
                <Text style={{ color: '#fff', marginHorizontal: 5, fontWeight: 'bold' }}>OR</Text>
                <View style={styles.line}></View>
            </View>
            
            <View style={{color: '#fff', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', marginTop: 5}}>
                <Text style={{ color: '#a5a5a5', fontWeight: 'bold'}}>
                    Don`t have an account ?
                </Text>
            </View> 
            
            <Text style={styles.button1} onPress={() => navigation.navigate('EnterEmail')}>
                Sign Up
            </Text>

        </View>
    )
}

export default Login

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
    line: {
        height: 1,
        width: 30,
        backgroundColor: '#a5a5a5'
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
        marginTop: 20,
    },
    head1: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff'
    },
    head2: {
        fontSize: 19,
        fontWeight: 'bold', 
        color: '#a5a5a5' 
    },
})