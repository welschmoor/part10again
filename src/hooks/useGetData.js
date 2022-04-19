import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from '../graphql/queries'


const useGetData = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network"
  })

  return { data, error, loading }
}

export default useGetData