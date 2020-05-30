import React, { useState, useEffect } from 'react';
import { CommentsEndpoint } from '../endpoints';
import Thumbnail from './Thumbnail';
import Loading from './Loading';
import { Text, View, ScrollView } from 'react-native';

const CommentList = ({ title, imageUrl, photoId }) => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        async function loadComments() {
            const comments = await CommentsEndpoint.getComments(photoId);
            console.log('comments');
            console.log(comments);
            setComments(comments);
        }
        loadComments();
    }, [])

    const renderComments = () => {
        if (comments) {
            return comments.map((comment, index) =>
                <Text key={index}>{comment}</Text>
            );
        }
    }


    if (!comments) {
        return (
            <Loading></Loading>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <Thumbnail  title={title} imageUrl={imageUrl} />
            <ScrollView>
                {/* {renderComments()} */}
            </ScrollView>
        </View>
    );
}

export default CommentList;