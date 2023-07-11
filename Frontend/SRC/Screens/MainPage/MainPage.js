import { StyleSheet, View, StatusBar } from 'react-native'
import React from 'react'
import BottomNavbar from '../../Components/BottomNavbar'
import TopNavbar from '../../Components/TopNavbar';
import PostCard from '../../Cards/PostCard';

const MainPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar/>
            <TopNavbar navigation={navigation} page={"MainPage"} />
            <View style={{marginVertical: 60,}}>
                <PostCard navigation={navigation}/>
            </View>
            <BottomNavbar navigation={navigation} page={"MainPage"} />
        </View>        
    )
}

export default MainPage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
    },
})