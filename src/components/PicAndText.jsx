import RepositoryImage from "./RepositoryImage"
import { StyleSheet, View, Text } from "react-native"


const styles = StyleSheet.create({
  container: {
    padding: 0,
    display: "flex",
    flexDirection: "row",

  },

})

const PicAndText = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default PicAndText