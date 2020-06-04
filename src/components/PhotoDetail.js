import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import Button from './Button';
import Icon from './Icon';
import { faComments } from '@fortawesome/free-solid-svg-icons'

const PhotoDetail = ({ navigation, title, imageUrl, photoId }) => {
  const { imageStyle, containerStyle, titleStyle, captionStyle } = styles;

  return (
    <Card onPress={() => Linking.openURL(imageUrl)} style={containerStyle}>
      <Image
        style={imageStyle}
        source={{ uri: imageUrl }}
      />
      <View style={captionStyle}>
        <Text style={titleStyle}>{title}</Text>
        <Icon onPress={() => navigation.navigate('Comments', { title, imageUrl, photoId })}  icon={faComments}></Icon>
      </View>
    </Card>
  );
};

const styles = {
  titleStyle: {
    fontSize: 16
  },
  containerStyle: {
    marginRight: 20,
    marginLeft: 20
  },
  imageStyle: {
    borderRadius: 20,
    height: 300,
    flex: 1,
    width: null
  },
  captionStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  }
};

export default PhotoDetail;
