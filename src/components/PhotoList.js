import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import PhotoDetail from './PhotoDetail';
import { PhotoSetsEndpoint, UserEndpoint } from '../endpoints'
const DEFAULT_USERNAME = 'maxipomar';

const PhotoList = (props) => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function loadPhotoSets() {
      const user = await UserEndpoint.getUserByUserName(DEFAULT_USERNAME);
      console.log('USer', user)
      const photo = await PhotoSetsEndpoint.getPhotos(props.albumId, user.id);
      console.log('photo', photo)
      setPhotos(photo);
    }
    loadPhotoSets();
  }, [])

  // useEffect(() => {
  //   axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`)
  //     .then(response => PhotosSet(response.data.photoset.photo));
  // });

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
      <View style={{ flex: 1 }}>
        <Text>
          Loading...
				</Text>
      </View>
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
