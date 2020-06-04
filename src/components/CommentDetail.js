import React from 'react'
import Card from './Card'
import { ScrollView, Text, View, FlatList } from 'react-native';
import Icon from './Icon'
import { faComment } from '@fortawesome/free-solid-svg-icons'

const CommentDetail = ({ comment }) => {
    const styles = {
        card: {
            borderTopLeftRadius:2,
        },
        mainContainerStyle: {
            display: 'flex',
            flexDirection: 'row',
            padding: 10,
        },
        iconContainerStyle: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60
        },
        descriptionContainerStyle: {
            display: 'flex',
            flexDirection: 'column'
        },
        icon:{
           padding:12
        },
        author: {
            fontWeight: 'bold',
            fontSize: 16
        },
        comment: {
            paddingTop: 5,
            fontSize: 14,
            maxWidth: 300
        }
    }
    return (
        <Card style={styles.card}>
            <View style={styles.mainContainerStyle}>
                <View style={styles.iconContainerStyle}>
                    <Icon icon={faComment} style={styles.icon}></Icon>
                </View>
                <View style={styles.descriptionContainerStyle}>
                    <Text style={styles.author}>{comment.realname}</Text>
                    <Text style={styles.comment}>{comment._content}</Text>
                </View >
            </View>
        </Card >
    )
}

export default CommentDetail 