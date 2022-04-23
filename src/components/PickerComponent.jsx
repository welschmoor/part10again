
import { Picker } from '@react-native-picker/picker';


const PickerComponent = ({ selectedSorting }) => {

  const pickerFn = (itemValue) => {
    if (itemValue === "dataasc") {
      orderObj.setOrderBy('CREATED_AT')
      orderObj.setOrderDirection('ASC')
    }
    else if (itemValue === "datadesc") {
      orderObj.setOrderBy('CREATED_AT')
      orderObj.setOrderDirection('DESC')

    } else if (itemValue === "ratingasc") {
      orderObj.setOrderBy('RATING_AVERAGE')
      orderObj.setOrderDirection('ASC')
    } else if (itemValue === "ratingdesc") {
      orderObj.setOrderBy('RATING_AVERAGE')
      orderObj.setOrderDirection('DESC')
    }
    setSelectedSorting(itemValue)
  }

  return (
    <Picker
      selectedValue={selectedSorting}
      onValueChange={(itemValue, itemIndex) =>
        pickerFn(itemValue)
      }>
      <Picker.Item label="Sort by date - newest first" value="datadesc" />
      <Picker.Item label="Sort by date - oldest first" value="dataasc" />
      <Picker.Item label="Sort by rating - Low to High" value="ratingasc" />
      <Picker.Item label="Sort by rating - High to Low" value="ratingdesc" />
    </Picker>
  )
}

export default PickerComponent