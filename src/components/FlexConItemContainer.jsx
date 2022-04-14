// a simple container of with some gap

import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: 60,

    paddingTop: 4,
  }
})

const FCIC = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default FCIC