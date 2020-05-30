import React from 'react'
import { Text } from 'react-native';

const styles = {
    textStyle: {
        fontSize: 32,
        padding: 18,
        maxWidth: '55%',
        overflow: 'visible'
    }
};


const Title = ({ children }) => {
    return (
        <Text style={styles.textStyle}>{children}</Text>
    )
}

export default Title;