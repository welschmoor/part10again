
import { View, Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 100,
    flex: 1,
  },
  text: {
    marginLeft: 20,
    marginTop: 20,

  }
})

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>my first React Native App</Text>
    </View>
  )
}

export default About