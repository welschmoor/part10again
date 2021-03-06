import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  container: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 2,

  },
  containerError: {
    marginBottom: 20,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 2,

  },
  input: {
    padding: 7,
    marginLeft: 8,
    
    fontSize: 18,
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={showError ? styles.containerError : styles.container} >
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput