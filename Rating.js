/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'react-native-elements';
import {View,StyleSheet, Text, Image} from 'react-native';

const Rating = ({value, color}) => {
  return (
      <View style={styles.cotainer}>
          <View style={styles.title}>
          <Image
              style={styles.imgIc}
              resizeMode="contain"
              source={require('../../../res/images/info.png')}></Image>
            <Text style={styles.dateTextstyle}>{' '}Rating</Text>
          </View>
          <View style={styles.rating}>
      <View>
        <Icon
          color={color}
          name={
            value >= 1 ? 'star' : value >= 0.5 ? 'star-half' : 'star-outline'
          }
        />
      </View>
      <View>
        <Icon
          color={color}
          name={
            value >= 2 ? 'star' : value >= 1.5 ? 'star-half' : 'star-outline'
          }
        />
      </View>
      <View>
        <Icon
          color={color}
          name={
            value >= 3 ? 'star' : value >= 2.5 ? 'star-half' : 'star-outline'
          }
        />
      </View>
      <View>
        <Icon
          color={color}
          name={
            value >= 4 ? 'star' : value >= 3.5 ? 'star-half' : 'star-outline'
          }
        />
      </View>
      <View>
        <Icon
          color={color}
          name={
            value >= 5 ? 'star' : value >= 4.5 ? 'star-half' : 'star-outline'
          }
        />
      </View>
    </View>
      </View>
    
  );
};
Rating.defaultProps = {
  color: '#f8e825',
};
Rating.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Rating;
const styles = StyleSheet.create({
    rating: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 15,

    },
    cotainer: {
        display: 'flex',
        flex: 1,
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dateTextstyle: {
        marginVertical: 15,
        fontFamily: 'Gilroy-Medium',
        fontWeight: '400',
        color: '#828282',
        fontSize: 15,
        
      },
      title: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '20%'
      },
      imgIc: {
        marginVertical: 15,
      }
})
