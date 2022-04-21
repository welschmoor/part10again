import createApolloClient from './src/utils/apolloClient';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import { StatusBar } from "react-native"
import Main from './src/components/Main';
import Constants from 'expo-constants';


//token storage
import AuthStorage from './src/utils/authStorage';
const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

import AuthStorageContext from './src/contexts/AuthStorageContext';


const App = () => {


  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
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