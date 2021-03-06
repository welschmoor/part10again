import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import SignIn from './SignIn';
import Signup from './Signup';
import RepositoryList from "./RepositoryList"
import AppBar from "./AppBar"
import SignupRedirect from './SignupRedirect';
import About from './About';
import RepositorySingle from './RepositorySingle'
import ReviewPage from '../pages/ReviewPage';
import MyReviews from '../pages/MyReviews'

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#EEE",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/about" element={<About />} exact />
        <Route path="/myreviews" element={<MyReviews />} exact />
        <Route path="/review" element={<ReviewPage />} exact />
        <Route path="/repository/:id" element={<RepositorySingle />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<Signup />} exact />
        <Route path="/signupRedirect" element={<SignupRedirect />} exact />
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </View>
  );
};

export default Main;