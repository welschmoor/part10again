import { reduceNum } from '../utils/helperfunctions';
import { View, StyleSheet } from 'react-native';
import RepositoryImage from './RepositoryImage';
import Text from "./Text"
import { Link } from 'react-router-native';

//styles
import FCIC from "./FlexConItemContainer"
import PicAndText from "./PicAndText"
import theme from '../STYLES/theme';
import FlexCon from "./FlexCon"


const RepositoryItem = ({ item }) => {

  return (
    <View style={styles.container} testID="repositoryItem">
      {/* <Text>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest</Text> */}
      <PicAndText>
        <RepositoryImage imgURL={item.ownerAvatarUrl} />
        <View style={styles.needsShrinking}>
          <Link to={`/repository/${item.id}`}><Text style={styles.headerText}>{item.fullName}</Text></Link>
          <Text style={styles.descriptionText}>{item.description}</Text>
          <View style={styles.languageButton}><Text style={styles.languageText}>{item.language}</Text></View>
        </View>
      </PicAndText>

      <FlexCon>
        <FCIC><Text>stars</Text></FCIC>
        <FCIC><Text>forks</Text></FCIC>
        <FCIC><Text>reviews</Text></FCIC>
        <FCIC><Text>rating</Text></FCIC>

      </FlexCon>
      <FlexCon>
        <FCIC><Text style={styles.boldText} id="stars">{reduceNum(item.stargazersCount)}</Text></FCIC>
        <FCIC><Text style={styles.boldText}> {reduceNum(item.forksCount)}</Text></FCIC>
        <FCIC><Text style={styles.boldText}> {item.reviewCount}</Text></FCIC>
        <FCIC><Text style={styles.boldText}>{item.ratingAverage}</Text></FCIC>
      </FlexCon>

    </View>
  )
}

export default RepositoryItem

const styles = StyleSheet.create({
  needsShrinking: {
    flexShrink: 1,
  },
  container: { padding: 20, paddingBottom: 24, backgroundColor: "white" },
  text: { color: 'blue', fontSize: 24, fontWeight: '700', },
  headerText: { color: 'black', fontSize: 18, fontWeight: '700', marginBottom: 5, },
  descriptionText: { color: '#333', fontSize: 16, fontWeight: '400', marginBottom: 8, },
  boldText: { fontSize: 14, fontWeight: '700', },
  languageButton: {
    backgroundColor: "#7757CC",
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
    color: "white",
    padding: 5,
    // maxWidth: 120,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    minHeight: 32,
    borderRadius: 7,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    alignSelf: 'flex-start', // this is how to prevent a button (View) from occupying the whole width.
  },
  languageText: {
    color: theme.colors.text,
    fontSize: 16,
    fontWeight: '700',

  }

});


