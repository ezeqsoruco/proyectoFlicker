

import React from 'react';
import { Text, View, Image } from 'react-native';
import CardSection from './CardSection';

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
  };
  
const Thumbnail = () => {
    const {
        thumbnailStyle,
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
      } = styles;
    
    <CardSection>
    <View style={thumbnailContainerStyle}>
      <Image
        style={thumbnailStyle}
        source={{ uri: imageUrl }}
      />
    </View>
    <View style={headerContentStyle}>
      <Text style={headerTextStyle}>{title}</Text>
      
    </View>
  </CardSection>
}

export default Thumbnail;