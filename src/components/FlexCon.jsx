// a simple container of with some gap

import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  }
})

const FlexCon = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default FlexCon