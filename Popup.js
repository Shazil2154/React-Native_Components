import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  StyleSheet
} from 'react-native';
import Color from '../../../Constants/Color';

const Popup = ({visible, setVisible, delPermit}) => {

  return (
    <View style={styles.locationCenteredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}>
        <View style={styles.locationModalContainer}>
          <View style={styles.locationModalView}>
            <Text style={styles.locationModalText}>
              Are you sure you want to delete this permit ?
            </Text>
            <ScrollView contentContainerStyle={styles.modalScroll}>
              <View style={styles.addLocationButton}>
                <TouchableOpacity
                  style={styles.delInstructions}
                  onPress={() => {
                    delPermit();
                  }}>
                  <Text style={styles.saveInstructionsText}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.saveInstructions}
                  onPress={() => {
                    setVisible(!visible);
                  }}>
                  <Text style={styles.saveInstructionsText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  singleLocation: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: '#f6f6f6',
  },
  singleLocationText: {
    fontFamily: 'Metropolis-Medium',
    fontSize: 13,
    color: '#4A4B4D',
  },
  locationCenteredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  locationModalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  locationModalView: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    width: '100%',
    height: '60%',
    padding: 10,
    paddingBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  locationModalText: {
    marginBottom: 15,
    marginHorizontal: 15,
    marginTop: 15,
    textAlign: 'left',
    fontFamily: 'Metropolis-Bold',
    fontSize: 16,
    color: '#4A4B4D',
  },
  modalScroll: {justifyContent: 'center'},
  addLocationButton: {marginVertical: 10},
  saveInstructions: {
    marginVertical: 5,
    width: '85%',
    alignSelf: 'center',
    height: 60,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: Color.Danger,
  },
  delInstructions: {
    marginVertical: 5,
    width: '85%',
    alignSelf: 'center',
    height: 60,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: Color.Primary,
  },
  saveInstructionsText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Metropolis-SemiBold',
  },
});

export default Popup;
