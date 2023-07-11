import { StyleSheet, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNavbar = ({ navigation, page }) => {
    return (
        <View style={styles.container}>
            {
                page === 'MainPage' ?
                    <MaterialCommunityIcons name="home" size={40} color="black" style={styles.icons}
                        onPress={() => navigation.navigate('MainPage')} />
                    :
                    <MaterialCommunityIcons name="home" size={15} color="black" style={styles.icons1}
                        onPress={() => navigation.navigate('MainPage')} />
            }

            {
                page === 'Guidelines' ?
                    <MaterialCommunityIcons name="book-open" size={40} color="black" style={styles.icons}
                        onPress={() => navigation.navigate('Guidelines')}
                    />
                    :
                    <MaterialCommunityIcons name="book-open" size={15} color="black" style={styles.icons1}
                        onPress={() => navigation.navigate('Guidelines')}
                    />
            }

            {
                page === 'LeaderBoard' ?
                    <MaterialCommunityIcons name="arrow-up" size={40} color="black" style={styles.icons}
                        onPress={() => navigation.navigate('LeaderBoard')}
                    />
                    :
                    <MaterialCommunityIcons name="arrow-up" size={15} color="black" style={styles.icons1}
                        onPress={() => navigation.navigate('LeaderBoard')}
                    />
            }

            {
                page === 'Feedback' ?
                    <MaterialCommunityIcons name="message" size={40} color="black" style={styles.icons}
                        onPress={() => navigation.navigate('Feedback')}
                    />
                    :
                    <MaterialCommunityIcons name="message" size={15} color="black" style={styles.icons1}
                        onPress={() => navigation.navigate('Feedback')}
                    />
            }
            
            {
                page === 'UserProfile' ?
                    <MaterialCommunityIcons name="account" size={40} style={styles.icons} 
                        onPress={() => navigation.navigate('UserProfile')}
                    />
                    :
                    <MaterialCommunityIcons name="account" size={15} style={styles.icons1} 
                        onPress={() => navigation.navigate('UserProfile')}
                    />
            }
        </View>
    )
}

export default BottomNavbar

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: "#000",
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100,
        alignItems: 'center',
    },
    icons: {
        borderTopWidth: 0,
        paddingTop: 3,
        paddingBottom: 4,
        height: 60,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: { width: 0, height: 0 },
        color: '#fff'
    },
    icons1: {
        color: '#fff',
        fontSize: 30,
    },
})