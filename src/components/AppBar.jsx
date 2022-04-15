import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import { Route, Routes, Navigate, Link, } from 'react-router-native';


const styles = StyleSheet.create({
  container: {
    height: 40,
    display: 'flex',
    flexDirection: "row",
    paddingLeft: 20,
    backgroundColor: "rgba(100, 100, 180, 1)",
    alignItems: "center"

  },
  button: {
  },
  text: {
    color: '#ffffff',
    marginRight: 20,
    fontSize: 18,
  }
});


const AppBar = () => {

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" ><Text style={styles.text}>Home</Text></Link>
        <Link to="/signin" ><Text style={styles.text}>Sign In</Text></Link>
  
      </ScrollView>

    </View>)
};

export default AppBar;