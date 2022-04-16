import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';

console.log('Constants.manifest.extra.apiURL', Constants.manifest.extra.apiURL)
const httpLink = createHttpLink({
  uri: `${Constants.manifest.extra.apiURL}/graphql`,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;