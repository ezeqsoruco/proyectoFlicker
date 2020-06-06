import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import AlbumDetail from './AlbumDetail';
import { UserEndpoint, PhotoSetsEndpoint } from '../endpoints';
import Title from './Title';
import Loading from './Loading';
import Icon from './Icon';
import { faCog } from '@fortawesome/free-solid-svg-icons'

const ALBUM_LIST_TITLE = 'Hola de nuevo'

const AlbumList = ({ navigation }) => {
    const [photoset, setPhotoset] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function loadPhotoSet() {
            const userFromFLckr = await UserEndpoint.getUser();
            setUser(userFromFLckr)
            const photosetFromFlickr = await PhotoSetsEndpoint.getPhotoSets(userFromFLckr.id);
            setPhotoset(photosetFromFlickr.photoset);
        }
        loadPhotoSet();
    }, [])

    const renderAlbums = (item) => {
        if (photoset) {
            return (
                <AlbumDetail navigation={navigation} key={item.id} title={item.title._content} albumId={item.id} />
            );
        }
    };

    if (!photoset && !user) {
        return (
            <Loading></Loading>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end'
            }}>
                <Icon onPress={() => navigation.navigate('Configuration')}
                    icon={faCog}
                    style={{ marginRight: 10, marginTop: 10 }}></Icon>
            </View>
            <Title>{`${ALBUM_LIST_TITLE} ${user.username._content} !`}</Title>
            <FlatList
                data={photoset}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (renderAlbums(item))}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export default AlbumList;
