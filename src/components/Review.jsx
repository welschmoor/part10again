

import { View, Text, StyleSheet } from "react-native"



const s = StyleSheet.create({
  MW: {

  },
  CW: {

  },
  needsShrinking: {
    flexShrink: 1,
  },
  headerText: { color: 'black', fontSize: 18, fontWeight: '700', marginBottom: 5, },
  descriptionText: { color: '#333', fontSize: 16, fontWeight: '400', marginBottom: 8, },
  rating: {
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 20,

    borderColor: "#7757CC",
    borderWidth: 3,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#7757CC", fontSize: 18, fontWeight: '700',
  },
  ratingText: {
    color: "#7757CC", fontSize: 18, fontWeight: '700',
  },
  ratingAndText: {
    display: "flex",
    flexDirection: "row",

  }
})

const RatingAndText = ({ children }) => {
  return (
    <View style={s.ratingAndText}>
      {children}
    </View>
  )
}


const Review = ({ item }) => {

  console.log("itemReview", item)

  return (
    <RatingAndText>
      <View style={s.rating}>
        <Text style={s.ratingText}>{item.rating}</Text>
      </View>
      <View style={s.needsShrinking}>
        <Text style={s.headerText}>{item.user.username}</Text>
        <Text style={s.descriptionText}>{item.description}</Text>
      </View>
    </RatingAndText>


  )
}

export default Review