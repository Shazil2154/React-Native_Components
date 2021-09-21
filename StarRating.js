/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from 'react-native-elements';
import {View,StyleSheet, Text, Image} from 'react-native';

const StarRating = ({value, color}) => {
  return (
     
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
    
  );
};
StarRating.defaultProps = {
  color: '#f8e825',
};
StarRating.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default StarRating;
const styles = StyleSheet.create({
    rating: {
        display: 'flex',
        flexDirection: 'row',
        // marginVertical: 15,

    },
})
