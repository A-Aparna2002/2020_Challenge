import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TopNavbar = ({ navigation, page }) => {

    return (
        <View style={styles.container}>
            {
                page === 'MainPage' &&
                <View style={{ flexDirection: 'row',  textAlign: 'center', paddingLeft: 20, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#fff', textAlign: 'center' }}>
                        20
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#8A2BE2', textAlign: 'center' }}>
                        20
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('BookOrMovie')} style={{paddingTop:6, paddingLeft:200}}>
                        <MaterialCommunityIcons
                            name="plus"
                            color={'#fff'}
                            size={35}
                        />
                    </TouchableOpacity>
                </View> 
            }

            {
                page === 'BookOrMovie' &&
                <View style={{ flexDirection: 'row',  textAlign: 'center', paddingLeft: 20, }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#fff', textAlign: 'center' }}>
                        20
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#8A2BE2', textAlign: 'center' }}>
                        20
                    </Text>
                </View> 
            }

            {
                page === 'UserProfile' &&
                <View style={{ flexDirection: 'row', textAlign: 'center', paddingLeft: 20,  }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#fff', textAlign: 'center' }}>
                        20
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#8A2BE2', textAlign: 'center' }}>
                        20
                    </Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={{ paddingLeft: 250 }} >
                        <MaterialCommunityIcons
                            name="menu"
                            color={'#fff'}
                            size={35}
                        />
                    </TouchableOpacity>
                </View>           
            }

            {
                page === 'AddPost' &&        
                <View style={{ flexDirection: 'row', textAlign: 'center', paddingLeft: 20, }}>
                    <View style={{paddingTop: 5}}>
                        <TouchableOpacity onPress={() => navigation.navigate('MainPage')}>
                            <MaterialCommunityIcons
                                name="arrow-left"
                                color={'#fff'}
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ paddingLeft: 250,fontWeight: 'bold', fontSize: 30, color: '#fff', textAlign: 'center' }}>
                        20
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#8A2BE2', textAlign: 'center' }}>
                        20
                    </Text>
                </View>           
            }

            {
                page === 'Guidelines' &&
                <View style={{ flexDirection: 'row', marginTop: 30, textAlign: 'center', marginLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#fff', textAlign: 'center' }}>
                        20
                    </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#8A2BE2', textAlign: 'center' }}>
                        20
                    </Text>
                </View>       
            }
        </View>
    )
}

export default TopNavbar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 10,
        position: 'absolute',
        top: 0,
        zIndex: 100,
        backgroundColor: "#000",

    }
})