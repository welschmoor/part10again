import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from '../graphql/queries'


const useGetData = (orderBy = "RATING_AVERAGE", orderDirection = "DESC", searchKeywordDeb = "") => {
  console.log('searchKeywordDeb<><>', searchKeywordDeb)
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: orderBy,
      orderDirection: orderDirection,
      searchKeyword: searchKeywordDeb,
    }
  })

  return { data, error, loading }
}

export default useGetData