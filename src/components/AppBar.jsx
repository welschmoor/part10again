import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import { Route, Routes, Navigate, Link, } from 'react-router-native';
import { AM_I_SIGNEDIN } from '../graphql/queries';
import { useApolloClient, useQuery } from '@apollo/client';
import { useContext } from "react"
import AuthStorageContext from "../contexts/AuthStorageContext"


const styles = StyleSheet.create({
  container: {
    height: 48,
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
    marginRight: 30,
    fontSize: 18,
  }
});


const AppBar = () => {
  const { data } = useQuery(AM_I_SIGNEDIN)
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient()
  console.log("loggg", data?.me?.username)


  const signOutHandler = async () => {
    await authStorage.removeAccessToken()
    apolloClient.resetStore()
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/" ><Text style={styles.text}>Home</Text></Link>
        <Link to="/about" ><Text style={styles.text}>About</Text></Link>
        {!data?.me?.username && <> <Link to="/signin" ><Text style={styles.text}>Sign In</Text></Link>
          <Link to="/signup" ><Text style={styles.text}>Sign Up</Text></Link></>}
        {data?.me?.username && <Pressable onPress={signOutHandler}><Text style={styles.text}>Sign Out</Text></Pressable>}
      </ScrollView>

    </View >)
};

export default AppBar;