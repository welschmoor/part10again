

import { View, Text, StyleSheet, Pressable, Alert } from "react-native"
import { format } from 'date-fns'
import { useApolloClient, useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../graphql/mutations"
import { AM_I_SIGNEDIN } from "../graphql/queries"


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
    backgroundColor: "white",
    marginTop: 10,
    padding: 20,
  },
  dateText: {
    color: '#777', fontSize: 14, fontWeight: '600',
    marginBottom: 6,
    marginTop: 0,
  },
  buttons: {
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  pressable: {
    flex: 1,
    backgroundColor: "#7757CC",
    color: "white",
    marginTop: 10,
    padding: 5,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    minHeight: 32,
    borderRadius: 7,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
  },
  pressableRed: {
    backgroundColor: "#CC3344",
    marginLeft: 20,
  }
  ,
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  }
})

const RatingAndText = ({ children }) => {
  return (
    <View style={s.ratingAndText}>
      {children}
    </View>
  )
}


const ReviewItem = ({ item, myOwnReviewsBool, refetch }) => {
  const { cache } = useApolloClient()
  const [deleteReview, { loading }] = useMutation(DELETE_REVIEW)

  const deleteHandler = async () => {
    console.log('deleted klacked')
    await deleteReview({
      variables: {
        deleteReviewId: item.id
      },
      // refetchQueries: [{
      //   query: AM_I_SIGNEDIN,
      //   variables: {
      //     includeReviews: true
      //   }
      // }]
    })

    refetch()
  }

  // example of how to delete a cached item (unfortunately it does not update the UI)
  const deleteFromCache = () => {
    cache.data.delete("Review:96887b27-fd0b-45a3-b9c5-bed6d0848ae0.django.django")
    // console.log('cache.data.data<><>', cache.data.data)
  }

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Please confirm",
      "That you want to delete this review",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "OK", onPress: () => {
            deleteHandler()
          }
        }
      ]
    );


  // console.log("itemReview", item)
  return (
    <>
      <RatingAndText>
        <View style={s.rating}>
          <Text style={s.ratingText}>{item.rating}</Text>
        </View>
        <View style={s.needsShrinking}>
          {!myOwnReviewsBool && <Text style={s.headerText}>{item.user.username}</Text>}
          {myOwnReviewsBool && <Text style={s.headerText}>{item.repositoryId}</Text>}
          <Text style={s.dateText}>{String(format(new Date(item.createdAt), 'dd MMM. yyyy'))}</Text>
          <Text style={s.descriptionText}>{item.text}</Text>
        </View>

      </RatingAndText>

      {myOwnReviewsBool &&
        <View style={s.buttons}>

          <Pressable style={s.pressable}>
            <Text style={s.btnText}>
              GitHub Link
            </Text>
          </Pressable>

          <Pressable style={[s.pressable, s.pressableRed]} onPress={createTwoButtonAlert}>
            <Text style={s.btnText}>
              Delete
            </Text>
          </Pressable>

        </View>
      }

    </>

  )
}

export default ReviewItem