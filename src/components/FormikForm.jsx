import { View, Pressable, Text, StyleSheet } from "react-native"
import FlexCon from "./FlexCon"
import FormikTextInput from "./FormikTextInput"

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  cwrapper: {
    padding: 20,
    display: 'flex',
  },
  submitBTN: {
    backgroundColor: "#7757CC",
    borderRadius: 3,
    display: "flex",
    alignSelf: 'stretch',
    justifyContent: "center",
    textAlign: 'center',
    minHeight: 42,
  },
  submitBTNtext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
  }
})


const FormikForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cwrapper}>
        <FormikTextInput name="name" placeholder="name" />
        <FormikTextInput name="password" placeholder="password" secureTextEntry />
        <Pressable onPress={onSubmit} style={styles.submitBTN}>
          <Text style={styles.submitBTNtext}>Submit</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default FormikForm