import React from 'react';
import { Text, View} from 'react-native';
import Card from './Card';


const AlbumDetail = ({ title, albumId, navigation }) => {
  const {
    headerContentStyle,
    headerTextStyle,
    imageStyle
  } = styles;
  return (
    <Card onPress={() => navigation.navigate('Photos',{albumId:albumId})}>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
        </View>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 20, 
  },
  headerTextStyle: {
    fontSize: 25,
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
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
