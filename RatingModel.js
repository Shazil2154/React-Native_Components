/*eslint-disable */
import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Color from '../../../Constants/Color';
import Rating from './Rating';


const RatingModel = (props) => {
  const [value, setvalue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const RatingViewer = (itemData) => {

    return (
      <TouchableOpacity
        onPress={() => {
          setvalue(itemData.item.value);
          props.DataValue(itemData.item.value);
          setModalVisible(!modalVisible);
        }}>
        <Text
          style={
            props.value === itemData.item.value
              ? styles.stationTitleColor
              : styles.stationTitle
          }>
          {itemData.item.status}
        </Text>
      </TouchableOpacity>
    );
  };
  return modalVisible ? (
    <Modal
      style={styles.Modal}
      animationType="slide"
      transparent={true}
      visible={true}>
      <View style={styles.modalContainer}>
        <View style={styles.flatlistContainer}>
          <FlatList
            data={props.options}
            style={styles.Flatliststyle}
            keyExtractor={(item) => item.id}
            renderItem={RatingViewer} />
        </View>
      </View>
    </Modal>
  ) : (
    <View style={{marginBottom: props.marginBottom}}>
      <View style={styles.container}>
        <TouchableOpacity
          style={
            props.colorDropDown
              ? styles.colorDropDown
              : styles.dropDownContainer
          }
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          <Rating value={value} color='#ffae00'/>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  stationTitle: {
    fontFamily: 'Gilroy-Regular',
    fontWeight: '400',
    color: Color.Primary,
    fontSize: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.Grey,
    paddingVertical: 15,
    paddingStart: 10,
  },
  stationTitleColor: {
    paddingStart: 10,
    backgroundColor: Color.Primary,
    fontFamily: 'Gilroy-Regular',
    fontWeight: '400',
    color: Color.white,
    fontSize: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.Grey,
    paddingVertical: 15,
  },
  Flatliststyle: {
    paddingBottom: 10,

    width: '100%',
    alignSelf: 'center',
  },
  flatlistContainer: {
    backgroundColor: Color.white,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1.5,
    borderRadius: 20,
    elevation: 8,
    shadowColor: Color.Primary,
    borderColor: Color.Primary,
  },
  Modal: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  colorDropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropDownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    justifyContent: 'center',

  },
  whiteText: {
    fontFamily: 'Gilroy-SemiBold',
    fontWeight: '700',
    fontSize: 14,
    color: Color.white,
    height: '100%',
    // paddingVertical: 0,
  },
  textInput: {
    fontFamily: 'Gilroy-Bold',
    fontWeight: '700',
    fontSize: 15,
    marginEnd: 15,

    height: '100%',
    // paddingVertical: 0,
  },
});

export default RatingModel;
