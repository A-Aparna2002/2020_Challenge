import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNavbar from '../../Components/TopNavbar';

const BookOrMovie = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TopNavbar navigation={navigation} page={"BookOrMovie"} />
            <View style={{marginTop: 100}}>
                <Text style={styles.button} onPress={() => navigation.navigate('AddBookPost')}>
                    Click here to select a Book post
                </Text>
                <Text style={styles.button} onPress={() => navigation.navigate('AddMoviePost')}>
                    Click here to select a Movie post
                </Text>
            </View>
        </View>
    )
}

export default BookOrMovie

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
    button: {
        height: 70,
        width: '90%',
        borderColor: '#a5a5a5',
        backgroundColor: '#000',
        borderRadius: 5,
        borderWidth: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingVertical: 20,
        marginTop: 50,
        textAlign: 'center',
        alignContent: 'stretch',
        alignSelf: 'center',
        alignItems: 'center',       
    },
})