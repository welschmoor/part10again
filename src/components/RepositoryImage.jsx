import { Image, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginRight: 20,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const RepositoryImage = ({ imgURL }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: imgURL,
          // uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
    </View>
  )
}

export default RepositoryImage