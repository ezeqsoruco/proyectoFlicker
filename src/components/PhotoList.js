import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import PhotoDetail from './PhotoDetail';
import { PhotoSetsEndpoint, UserEndpoint } from '../endpoints'
import Loading from './Loading';
import { FlatList } from 'react-native-gesture-handler';

const DEFAULT_USERNAME = 'maxipomar';

const PhotoList = (props) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function loadPhotoSets() {
      const user = await UserEndpoint.getUserByUserName(DEFAULT_USERNAME);
      const photosFromFLickr = await PhotoSetsEndpoint.getPhotos(props.route.params.albumId, user.id);
      setPhotos(photosFromFLickr);
    }
    loadPhotoSets();
  }, [])


  const renderAlbums = (photo) => {
    const imageUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
    return <PhotoDetail navigation={props.navigation} title={photo.title} imageUrl={imageUrl} photoId={photo.id} />
  }


  if (!photos) {
    return (
      <Loading></Loading>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={photos}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (renderAlbums(item))}
        keyExtractor={item => item.photos}
      />
    </View>
  );
}

export default PhotoList;
