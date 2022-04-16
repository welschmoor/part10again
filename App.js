import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from "react-native"
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
const apolloClient = createApolloClient();

import Constants from 'expo-constants';


const App = () => {
  console.log(Constants.manifest, "Constants.manifest");

  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>);
};

export default App;










// OLD CODE
// import BodyMassIndexCalculator from './src/BodyMassIndexCalculator'
// const App = () => {
  //   return (
    //     <>

//       <BodyMassIndexCalculator />

//       <StatusBar style="auto" />
//     </>);
// };