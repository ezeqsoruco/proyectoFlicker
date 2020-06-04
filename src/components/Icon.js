import React, { Component } from 'react'
import { View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
const styles = {
    iconStyle: {
        padding:18,
        color: '#737373'
    }
};
const Icon = (props) => {

    return (
        <FontAwesomeIcon {...props} style={styles.iconStyle} />)
}



export default Icon