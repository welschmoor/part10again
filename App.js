import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { StatusBar } from "react-native"

import BodyMassIndexCalculator from './src/BodyMassIndexCalculator'

// const App = () => {
//   return (
//     <>

//       <BodyMassIndexCalculator />

//       <StatusBar style="auto" />
//     </>);
// };

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>);
};


export default App;