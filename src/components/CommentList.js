import React, { useState, useEffect } from 'react';
import { CommentsEndpoint } from '../endpoints';
import Thumbnail from './Thumbnail';
import Loading from './Loading';
import { Text, View, FlatList } from 'react-native';
import CommentDetail from './CommentDetail';

const CommentList = ({ route }) => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        async function loadComments() {
            const comments = await CommentsEndpoint.getComments(route.params.photoId);
            setComments(comments);
        }
        loadComments();
    }, [])

    const renderComments = (comment) => {
        return <CommentDetail comment={comment}></CommentDetail>
    }

    if (!comments) {
        return (
            <Loading></Loading>
        );
    }
    return (
        <View style={{ flex: 1 }}>
            <Thumbnail title={route.params.title} imageUrl={route.params.imageUrl} />
            <View style={{ paddingLeft: 15 }}>
                <FlatList
                    data={comments}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (renderComments(item))}
                    keyExtractor={item => item.comment}
                />
            </View>
        </View>
    );
}

export default CommentList;