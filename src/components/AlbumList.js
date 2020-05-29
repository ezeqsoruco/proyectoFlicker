import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import AlbumDetail from './AlbumDetail';
import { UserEndpoint, PhotoSetsEndpoint } from '../endpoints';
import Title from './Title';

const DEFAULT_USERNAME = 'maxipomar';
const ALBUM_LIST_TITLE = 'Hola de nuevo'

const AlbumList = () => {
    const [photoset, setPhotoset] = useState(null);

    useEffect(() => {
        async function loadPhotoSet() {
            const user = await UserEndpoint.getUserByUserName(DEFAULT_USERNAME);
            const photosetFromFlickr = await PhotoSetsEndpoint.getPhotoSets(user.id);
            setPhotoset(photosetFromFlickr.photoset);
        }
        loadPhotoSet();
    }, [])


    const renderAlbums = () => {
        if (photoset) {
            return photoset.map(album =>
                <AlbumDetail key={album.id} title={album.title._content} albumId={album.id} />
            );
        }
    };


    if (!photoset) {
        return (
            <Text>
                Loading...
            </Text>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <Title>{`${ALBUM_LIST_TITLE} ${DEFAULT_USERNAME} !`}</Title>
            <ScrollView>
                {renderAlbums()}
            </ScrollView>
        </View>
    );
}


export default AlbumList;
