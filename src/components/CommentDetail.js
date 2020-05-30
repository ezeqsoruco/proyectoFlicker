import React from 'react'
import { View, Text } from 'react-native'

const CommentDetail = ({ comment }) => {
    return (
        <View>
            <Text>{'<9'}</Text>
            <View>
                <Text>{comment.realname}</Text>
                <Text>{comment._content}</Text>
            </View>
        </View>
    )
}

export default CommentDetail