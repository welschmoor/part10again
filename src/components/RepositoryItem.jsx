import { View, StyleSheet } from 'react-native';
import Text from "./Text"
import RepositoryImage from './RepositoryImage';

//styles
import PicAndText from "./PicAndText"

const RepositoryItem = ({ item }) => {


  return (
    <View style={styles.container}>
      <PicAndText>
        <RepositoryImage />
        <View>
          <Text style={styles.headerText}>{item.fullName}</Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <Text>Language: {item.language}</Text>
        </View>
      </PicAndText>
      <Text>stars: {item.stargazersCount}</Text>
      <Text>forks: {item.forksCount}</Text>
      <Text>reviewCount: {item.reviewCount}</Text>
      <Text>rating: {item.ratingAverage}</Text>
    </View>
  )
}

export default RepositoryItem


const styles = StyleSheet.create({
  container: { padding: 20, },
  text: { color: 'blue', fontSize: 24, fontWeight: '700', },
  headerText: { color: 'black', fontSize: 18, fontWeight: '700', marginBottom: 5, },
  descriptionText: { color: '#333', fontSize: 16, fontWeight: '400', marginBottom: 5, },
});


