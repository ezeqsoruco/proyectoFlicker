import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
const INDICATOR_SIZE = 90;
const INDICATOR_COLOR = '#FFA8D9'
const styles = {
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
}

const Loading = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size={INDICATOR_SIZE} color={INDICATOR_COLOR} />
        </View>
    );
}


export default Loading;