import React, {useState, useEffect} from 'react';

const PhotoList = () =>{

    const [photos, PhotosSet] = useState(null);
    useEffect(() =>{
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=6e8a597cb502b7b95dbd46a46e25db8d&photoset_id=${props.albumId}&user_id=137290658%40N08&format=json&nojsoncallback=1`)
        .then(response => PhotosSet(response.data.photoset.photo));
    });

    function renderAlbums() {
        return photos.map(photo =>
          <PhotoDetail key={photo.title} title={photo.title} imageUrl={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} />
        );
    }

    console.log(this.state);


    if (!photos) { 
		return (
            <View style={{ flex: 1 }}>
				<Text>
                    Loading...
				</Text>
            </View>
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