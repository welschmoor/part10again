import { useQuery } from "@apollo/client"
import { FETCH_ONE, GET_REPOSITORIES } from '../graphql/queries'


const useFetchOne = (first, id) => {
  const { data, loading, fetchMore } = useQuery(FETCH_ONE, {
    variables: {
      repositoryId: id,
      first: first || 3,
    },
    fetchPolicy: 'cache-and-network',
  })

  console.log('fetchOneData<><>', data)

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data?.repository.reviews.pageInfo.endCursor,
        first: first || 3,
      },
    });
  };

  return { data, loading, fetchMore: handleFetchMore }
}

export default useFetchOne