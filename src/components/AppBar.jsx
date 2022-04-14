import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

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
  const pressableHandler = () => {
    console.log("kek, ,")
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={pressableHandler} style={styles.button}>
        <Text style={styles.text}>Home</Text>
      </Pressable>
      <Pressable onPress={pressableHandler} style={styles.button}>
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
    </View>)
};

export default AppBar;