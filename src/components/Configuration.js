import React from 'react'
import { TextInput, View, Button } from 'react-native';
import { UserEndpoint } from '../endpoints';
const USERNAME_PLACEHOLDER = 'Ingrese usuario...'
const BUTTON_COLOR = '#f194ff'
const BUTTON_TEXT = 'Cargar usuario'
const Configuration = () => {
    const [username, setUsername] = React.useState(USERNAME_PLACEHOLDER);

    return (
        <View style={{ display: 'flex', justifyContent: 'space-evenly', padding: 35 }}>
            <TextInput
                style={{ height: 40, borderWidth: 1 }}
                onChangeText={text => setUsername(text)}
                username={username}
            />
            <Button
                title={BUTTON_TEXT}
                color={BUTTON_COLOR}
                style={{ height: 40, borderRadius: 99, paddingTop: 25 }}
                onPress={() => UserEndpoint.setUsername(username)}
            />
        </View>
    );
}

export default Configuration;