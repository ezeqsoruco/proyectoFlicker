import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';

import AlbumDetail from './AlbumDetail';
import { getPhotoSets } from '../endpoints/photo-sets.endpoints';

class AlbumList extends Component {
    state = { photoset: null };

    componentWillMount() {
        const userId = '137290658%40N08';
        const photosetFromFlickr = getPhotoSets(userId);
        this.setState({ photoset: photosetFromFlickr });

    }

    renderAlbums() {
        return this.state.photoset.map(album =>
            <AlbumDetail key={album.id}
                title={album.title._content}
                albumId={album.id} />
        );
    }

    render() {
        console.log(this.state);


        if (!this.state.photoset) {
            return (
                <Text>
                    Loading...
                </Text>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    {this.renderAlbums()}
                </ScrollView>
            </View>
        );
    }
}

export default AlbumList;
