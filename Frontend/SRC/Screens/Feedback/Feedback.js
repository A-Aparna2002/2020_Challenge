import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import BottomNavbar from '../../Components/BottomNavbar'
import React from "react";

const Feedback = ({ navigation }) => {
  return (
    <SafeAreaView style={{ paddingHorizontal: 15, flex: 1, backgroundColor: '#000' }}>
      <BottomNavbar navigation={navigation} page={"Feedback"} />
      <ScrollView showsVerticalScrollIndicator={false}>
        
        <View style={{ paddingHorizontal: 5, flexDirection: 'row', marginTop: 50, textAlign: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#fff', textAlign: 'center' }}>
            20
          </Text>
          <Text style={{ fontWeight: 'bold', fontSize: 35, color: '#8A2BE2', textAlign: 'center' }}>
            20
          </Text>
        </View>
        
        <View style={styles.container}>
          <View style={styles.textAreaContainer}>
            <Text style={{ padding: 4, fontSize: 26, fontWeight: 'bold', color: '#a5a5a5', marginTop: 20, marginBottom: 20 }}>
              Submit Your Feedback
            </Text>
            <TextInput textAlignVertical='top' placeholder="Enter Your Name" placeholderTextColor='#a5a5a5' style={styles.input} />
            <TextInput style={styles.textArea}
              textAlignVertical='top'
              placeholder="Enter your feedback"
              placeholderTextColor= '#a5a5a5'
              numberOfLines={20}
              multiline={true}
              color="#a5a5a5"
            />
          </View>
        </View>
        
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default Feedback

const styles =  StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 3,
    backgroundColor: 'black',
    alignContent: 'center',
    alignItems: 'center',
  },
    textAreaContainer: {
        borderColor: '#a5a5a5',
        color: '#a5a5a5',
    },
    textArea:{
      height: 100,
      padding: 7,
      margin:2,
      width:360,
      borderWidth: 1,
      borderColor: 'white',
      color: 'white',
      justifyContent: "flex-start",
      color: '#a5a5a5',
      borderColor: '#a5a5a5',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    color: 'white',
    padding: 7,
    justifyContent: "flex-start",
    width:360,
    margin: 2,
    color: '#a5a5a5',
    borderColor: '#a5a5a5',
    marginTop: 10,
    marginBottom: 20
    },
  button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    padding: 15,
    backgroundColor: '#8A2BE2',
    marginTop: 30,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
