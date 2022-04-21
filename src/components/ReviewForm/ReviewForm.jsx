
import { View, Pressable, Text, StyleSheet } from "react-native"
import FormikTextInput from "../FormikTextInput"

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


const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cwrapper}>
        <FormikTextInput name="owner" placeholder="Owner of repository" testID="ownerinput"  />
        <FormikTextInput name="repname" placeholder="Repository name"  testID="repnameinput" />
        <FormikTextInput name="rating" placeholder="Your rating (0 to 100)"  testID="ratinginput" />
        <FormikTextInput name="reviewText" multiline placeholder="Your review text"  testID="reviewTextinput" />
        <Pressable onPress={onSubmit} style={styles.submitBTN}>
          <Text style={styles.submitBTNtext}>Submit</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ReviewForm