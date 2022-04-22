import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from '../graphql/queries'

const first = 2
const useGetData = (orderBy = "RATING_AVERAGE", orderDirection = "DESC", searchKeywordDeb = "", first = 8) => {
  console.log('searchKeywordDeb<><>', searchKeywordDeb)

  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      orderBy: orderBy,
      orderDirection: orderDirection,
      searchKeyword: searchKeywordDeb,
      first: first,
    }
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy: orderBy,
        orderDirection: orderDirection,
        searchKeyword: searchKeywordDeb,
        first: first,
      },
    });
  };
  return { data, error, loading, fetchMore: handleFetchMore }
}

export default useGetData