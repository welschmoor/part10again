import { useQuery } from "@apollo/client"
import { AM_I_SIGNEDIN } from "../graphql/queries"



const useMe = (includeReviews) => {
  const { data } = useQuery(AM_I_SIGNEDIN, {
    variables: {
      includeReviews: includeReviews
    }
  })

  const reviewsData = data?.me?.reviews?.edges.map(each => each.node)
  console.log("useMe reviewsData<><>", reviewsData)
  return { data, reviews: reviewsData }
}

export default useMe