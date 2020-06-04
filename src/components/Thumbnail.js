

import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';

const styles = {
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 60,
    width: 60,
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20,
  },
  thumbnailContainerStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 10
  },
};

const Thumbnail = ({ title, imageUrl }) => {
  const {
    containerStyle,
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
  } = styles;

  return (
    <Card>
      <View style={containerStyle}>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: imageUrl }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
      </View>
    </Card>
  )
}

export default Thumbnail;