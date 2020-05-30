import React from 'react';
import { Text, Image, Linking } from 'react-native';
import Card from './Card';
import Button from './Button';
import { Actions } from 'react-native-router-flux';

const PhotoDetail = ({ title, imageUrl, photoId }) => {
  const { imageStyle, containerStyle, titleStyle } = styles;

  return (
    <Card onPress={() => Linking.openURL(imageUrl)} style={containerStyle}>
      <Image
        style={imageStyle}
        source={{ uri: imageUrl }}
      />
      <Text style={titleStyle}>{title}</Text>
      <Button onPress={() => Actions.commentList({ title, imageUrl, photoId })} >Comentarios</Button>
    </Card>
  );
};

const styles = {
  titleStyle: {
    padding: 20,
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
  }
};

export default PhotoDetail;
