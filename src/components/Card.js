import React from 'react';
import { TouchableOpacity  } from 'react-native';

const Card = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}  style={styles.containerStyle}>
      {props.children}
    </TouchableOpacity >
  );
};

const styles = {
  containerStyle: {
    borderRadius: 16,
    backgroundColor: 'white',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    
    elevation: 2,

    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    marginBottom: 5
  }
};

export default Card;
