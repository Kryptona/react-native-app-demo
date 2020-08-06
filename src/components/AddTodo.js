import {THEME} from "../theme";
﻿import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Alert, Keyboard} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export const AddTodo = ({onSubmit}) => {

    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
            Keyboard.dismiss();
        } else {
            Alert.alert('Название дела не может быть пустым');
        }
    };

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Введите название дела..."
                autoCorrect={false}
                autoCapitalize='none'
            />
            <AntDesign.Button onPress={pressHandler} name='plus'>
                Добавить
            </AntDesign.Button>
        </View>
    )
};

const styles = StyleSheet.create({
    block: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginBottom: 15,
    },
    input: {
        paddingLeft: 5,
        marginRight: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: THEME.BORDER_INPUT_COLOR,
        borderRadius: THEME.BORDER_RADIUS,
        flexGrow: 1,
        flexShrink: 0,
    },
    button: {
        flexGrow: 0,
        flexShrink: 1,
        backgroundColor: 'blue',
    }
});
