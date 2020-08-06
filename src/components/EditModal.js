import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Modal, Alert} from 'react-native'
import {THEME} from "../theme";
import {AppButton} from "./ui/AppButton";

export const EditModal = ({visible, onCancel, value, onSave}) => {

    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        const titleLength = title.trim().length;
        if (titleLength < 3) {
            Alert.alert('Error!', `Min title length is 3 symbols. Now it's ${titleLength} symbols`)
        } else {
            onSave(title);
        }
    };
    
    const cancelHandler = () => {
        setTitle(value);
        onCancel();
    };

    return (
        <Modal visible={visible} animationType="slide" transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder={'Enter title'}
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>                    
                    <AppButton
                        onPress={cancelHandler}
                        color={THEME.DANGER_COLOR}
                    >
                        Undo
                    </AppButton>
                    <AppButton
                        onPress={() => saveHandler()}
                        color={THEME.ACCEPT_COLOR}
                    >
                        Save
                    </AppButton>
                </View>

            </View>
        </Modal>

    )
};

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        padding: 10,
        borderColor: THEME.MAIN_COLOR,
        width: '80%',
        borderWidth: 1,
        borderRadius: THEME.BORDER_RADIUS,
    },
    buttons: {
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
});