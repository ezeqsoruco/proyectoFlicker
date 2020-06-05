import React, { useState, useEffect } from 'react';
import { ScrollView, Text, View, Picker, StyleSheet } from 'react-native';
import PhotoDetail from './PhotoDetail';
import { PhotoSetsEndpoint, UserEndpoint, PhotoInfoEndpoint } from '../endpoints'
import Loading from './Loading';
import { FlatList } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

var typeOrder = "";
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

  const  sortItemByName = () => {
    const items  = photos;
    const clonedItems = items.map(item => ({ ...item }));
    clonedItems.sort(compare);
    setPhotos(clonedItems);

    function compare(a, b) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }
  };

  const  sortItemByDate = () => {
    const items  = photos;
    const clonedItems = items.map(item => ({ ...item }));
    const sortedItems = clonedItems.sort(compare);
    setPhotos(sortedItems);

    function compare(a, b) {
      if (a.dateupload < b.dateupload) return -1;
      if (a.dateupload > b.dateupload) return 1;
      return 0;
    }
  };

  const changeTypeOrder = (type) =>{
      typeOrder = type;
      console.log(typeOrder);

      if(typeOrder === "name")
      {
        sortItemByName();
      } 

      if(typeOrder === "date")
      {
        sortItemByDate();
      }
  }

  return (
    
    <View style={{ flex: 1 }}>
      <View style={{height: 57, backgroundColor: "#DFDEDE"}}>
        <Text style={{...styleText }}>Ordenar por: </Text>
        <RNPickerSelect
            style={{ ...pickerSelectStyles }}
            placeholder={{}}
            onValueChange={(value) => changeTypeOrder(value)}
            items={[
                { label: 'Fecha', value: 'date' },
                { label: 'Nombre', value: 'name' },
            ]}
        />
      </View>
      <FlatList
        data={photos}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (renderAlbums(item))}
        keyExtractor={item => item.photos}
      />
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputAndroid:{
    textAlign: 'center',
    padding: 25,
    left: 20,
    bottom: 5,
    left: 5
  },
  viewContainer: {
    backgroundColor: '#FFFFFF',
    width: 200,
    left: 190,
    borderRadius: 20,
    bottom: 15,
    height: 40,
    elevation: 3
  }
});

const styleText = StyleSheet.create({
  fontSize: 16,
  top: 15,
  left: 25
})

export default PhotoList;
