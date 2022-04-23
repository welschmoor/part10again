import { FlatList, StyleSheet } from "react-native";
import ReviewItem from "./ReviewItem";
import ItemSeparator from "./ItemSeparator";
import RepositoryItem from './RepositoryItem'

const s = StyleSheet.create({
  h2: {
    fontSize: 26,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 18,
  },
  listview: {

  }
})

const RepositoryInfo = ({ repository }) => {
  // Repository's information implemented in the previous exercise
  return (
    <RepositoryItem item={repository} />
  )
};

const ReviewList = ({ data, onEndReach, refetch, myOwnReviewsBool = false }) => {
  const reviews = data?.reviews.edges.map(each => each.node) || []

  return (

    <FlatList
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={ItemSeparator}
      data={reviews}
      ListHeaderComponent={!myOwnReviewsBool && (() => <RepositoryInfo repository={data} />)}
      renderItem={({ item }) => {
        return <ReviewItem item={item} myOwnReviewsBool={myOwnReviewsBool} refetch={refetch} />
      }}
    />
  )
}


export default ReviewList