
import { View, Text, StyleSheet } from 'react-native'
import useMe from '../hooks/useMe'
import ReviewList from '../components/ReviewList'


const MyReviews = () => {
  const { data } = useMe(true)
  console.log("useMe data<><>", data)

  const onEndReach = () => {
    console.log('onEndReach myReviews<><>')
  }

  return (
    <View style={s.MW}>
      <View style={s.textW}>
        <Text style={s.text}>My reviews</Text>
      </View>
      <ReviewList data={data?.me} myOwnReviewsBool={true} onEndReach={onEndReach} />
    </View>
  )
}


const s = StyleSheet.create({
  MW: {
    // padding: 20,
    flex: 1,
    backgroundColor: "#EEE",
  },
  text: {
    fontSize: 20,
    alignSelf: "center",

    fontWeight: "500",
 

  },
  textW: {
    justifyContent: "center",
    backgroundColor: "white",
    marginBottom: 10,
    height: 40,
  }
})

export default MyReviews