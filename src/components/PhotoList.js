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
      const photosFromFlickr = await PhotoSetsEndpoint.getPhotos(props.albumId, user.id);
      setPhotos(photosFromFlickr);
    }
    loadPhotoSets();
  }, [])


  const renderAlbums = () => {
    if (photos) {
      return photos.map((photo, index) => {
        const imageUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
        return <PhotoDetail key={index} title={photo.title} imageUrl={imageUrl} photoId={photo.id} />
      });
    }
  }


  if (!photos) {
    return (
      <Loading></Loading>
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {renderAlbums()}
      </ScrollView>
    </View>
  );
}

export default PhotoList;
