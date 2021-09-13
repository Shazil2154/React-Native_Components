import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';

const AddIngredient = () => {
  const [ingredients, updateIngredients] = useState([0]);

  const addHandler = () => {
    let newingredients = [...ingredients];
    newingredients.push(newingredients[newingredients.length - 1] + 1);
    updateIngredients(newingredients);
  };
  const deleteHandler = index => {
    if (ingredients.length > 1) {
      let newingredients = [...ingredients];
      newingredients.splice(index, 1);
      console.log(newingredients, index);
      updateIngredients(newingredients);
    }
  };

  console.log({ingredients});
  return (
    <ScrollView style={styles.inputsContainer}>
      {ingredients?.map((input, index) => (
        <View style={styles.inputContainer} key={input}>
          <TextInput placeholder={'Enter Ingredients'} style={{flex: 1}} />
          <Pressable onPress={addHandler}>
            <Text style={styles.buttonStyle}>+</Text>
          </Pressable>
          <Pressable onPress={() => deleteHandler(index)}>
            <Text style={styles.buttonStyle}>-</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {color: 'red', fontSize: 18, marginHorizontal: 5},

  inputsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
});
export default AddIngredient;
