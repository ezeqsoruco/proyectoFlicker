import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import AlbumDetail from './AlbumDetail';
import { UserEndpoint, PhotoSetsEndpoint } from '../endpoints';

const DEFAULT_USERNAME = 'maxipomar';

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

    if (!photoset) {
        return (
            <Text>
                Loading...
            </Text>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {renderAlbums(photoset)}
            </ScrollView>
        </View>
    );
}

function renderAlbums(photoset) {
    if (photoset) {
        return (
            photoset.map(
                (album) => <AlbumDetail key={album.id} title={album.title._content} albumId={album.id} />
            )
        )
    }
}


export default AlbumList;
