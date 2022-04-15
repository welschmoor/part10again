import { View, StyleSheet } from 'react-native';
import Text from "./Text"
import RepositoryImage from './RepositoryImage';

//styles
import PicAndText from "./PicAndText"
import FlexCon from "./FlexCon"
import FCIC from "./FlexConItemContainer"

const RepositoryItem = ({ item }) => {


  const reduceNum = (num) => { // this function turns number 39,149 into 39K

    if (String(num).length === 7) {
      return String(num).slice(0, 1) + "." + String(num).slice(4, 5) + 'M'
    }
    else if (String(num).length === 6) {
      return String(num).slice(0, 3) + "." + String(num).slice(3, 4) + 'K'
    }
    else if (String(num).length === 5) {
      console.log("len", num.length)
      return String(num).slice(0, 2) + "." + String(num).slice(2, 3) + 'K'
    }
    else if (String(num).length === 4) {
      return String(num).slice(0, 1) + "." + String(num).slice(1, 2) + 'K'
    }
  }


  return (
    <View style={styles.container}>
      {/* <Text>TestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTestTest</Text> */}
      <PicAndText>
        <RepositoryImage />
        <View style={styles.needsShrinking}>
          <Text style={styles.headerText}>{item.fullName}</Text>
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
        <FCIC><Text style={styles.boldText}>{reduceNum(item.stargazersCount)}</Text></FCIC>
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
    color: "white",
    fontSize: 16,
    fontWeight: '700',
    
  }

});


