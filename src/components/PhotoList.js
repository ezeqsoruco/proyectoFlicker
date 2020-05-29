import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import PhotoDetail from './PhotoDetail';
import { PhotoSetsEndpoint, UserEndpoint } from '../endpoints'
import Loading from './Loading';

const DEFAULT_USERNAME = 'maxipomar';

const PhotoList = (props) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function loadPhotoSets() {
      const user = await UserEndpoint.getUserByUserName(DEFAULT_USERNAME);
      const photo = await PhotoSetsEndpoint.getPhotos(props.albumId, user.id);
      setPhotos(photo);
    }
    loadPhotoSets();
  }, [])


  const renderAlbums = () => {
    if (photos) {
      console.log('rendering photos')
      return photos.map(photo =>
        <PhotoDetail key={photo.title} title={photo.title} imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
      );
    }
  }


  if (!photos) {
    return (
      <Loading></Loading>
    );
  }
  console.log('laskdjasldkjsadlkjsada')
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {renderAlbums()}
      </ScrollView>
    </View>
  );
}

export default PhotoList;
