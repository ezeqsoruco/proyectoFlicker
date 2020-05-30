import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, FlatList } from 'react-native';
import AlbumDetail from './AlbumDetail';
import { UserEndpoint, PhotoSetsEndpoint } from '../endpoints';
import Title from './Title';
import Loading from './Loading';

const DEFAULT_USERNAME = 'maxipomar';
const ALBUM_LIST_TITLE = 'Hola de nuevo'

const AlbumList = ({navigation}) => {
    const [photoset, setPhotoset] = useState(null);

    useEffect(() => {
        async function loadPhotoSet() {
            const user = await UserEndpoint.getUserByUserName(DEFAULT_USERNAME);
            const photosetFromFlickr = await PhotoSetsEndpoint.getPhotoSets(user.id);
            setPhotoset(photosetFromFlickr.photoset);
        }
        loadPhotoSet();
    }, [])

    const renderAlbums = (item) => {
        if (photoset) {
            return(
                <AlbumDetail navigation={navigation} key={item.id} title={item.title._content} albumId={item.id} />
            );
        }
    };

    if (!photoset) {
        return (
           <Loading></Loading>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Title>{`${ALBUM_LIST_TITLE} ${DEFAULT_USERNAME} !`}</Title>
            <FlatList
                data = {photoset}
                showsVerticalScrollIndicator= {false}
                renderItem={({item}) => (renderAlbums(item))}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default AlbumList;
