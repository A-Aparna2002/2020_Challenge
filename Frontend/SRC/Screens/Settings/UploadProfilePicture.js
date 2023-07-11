import { Text, View, TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { firebase } from '../../Firebase/Config'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UploadProfilePicture = ({ navigation }) => {
    
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })


        if (!result.cancelled) {
            const source = { uri: result.uri };
            setImage(source);

            const response = await fetch(result.uri);
            const blob = await response.blob();
            const filename = result.uri.substring(result.uri);

            const ref = firebase.storage().ref().child(filename);
            const snapshot = await ref.put(blob);
            const url = await snapshot.ref.getDownloadURL();

            // console.log(url)
            return url
        }
        else {
            return null
        }
    }

    const handleUpload = () => {
        // pickImage()
        AsyncStorage.getItem('user')
            .then(data => {
                setLoading(true)

                pickImage().then(url => {
                    fetch('http://localhost/setProfilePic',
                    {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            profilePic: url
                        })
                    })
                        .then(res => res.json()).then(
                            data => {
                                if (data.message === "Profile picture updated successfully") {
                                    setLoading(false)
                                    alert('Profile picture updated successfully')
                                    navigation.navigate('EditProfile')
                                }
                                else if (data.error === "Invalid Credentials") {
                                    alert('Invalid Credentials')
                                    setLoading(false)
                                    navigation.navigate('Login')
                                }
                                else {
                                    setLoading(false)
                                    alert("Please Try Again");
                                }
                            }
                        )
                        .catch(err => {
                            console.log(err)
                        })

                })
            })
    }
    return (
        <View>
            <View style={{ paddingTop: 15, paddingHorizontal:10, flexDirection: 'row', textAlign: 'center', backgroundColor:'black'}}>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        color={'#fff'}
                        size={30}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.main} >
                    <Text style={{ fontWeight: 'bold', fontSize: 50, color: '#fff' , textAlign: 'center',}}>
                        20
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 50, color: '#8A2BE2' , textAlign: 'center',}}>
                        20
                    </Text>
                </View>
                <Text style={styles.head}>Choose a profile picture</Text>
                {
                    loading ? <ActivityIndicator
                        size="large"
                        color="white"
                    /> :
                        <Text style={styles.button} onPress={() => handleUpload()}> Upload </Text>
                }
            </View>
        </View>
    )
}

export default UploadProfilePicture

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        paddingTop: 250,
    },
    main: {
        flexDirection: 'row',
        textAlign: 'center',
        height: 80,
        resizeMode: 'contain',
    },
    button: {
        height: 50,
        width: '90%',
        backgroundColor: '#8A2BE2',
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        paddingVertical: 10,
        marginVertical: 20,
    },
    head: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        // fontWeight: 'bold',
        // backgroundColor: 'white',
    },
})