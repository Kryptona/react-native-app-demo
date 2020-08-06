import {THEME} from "../theme";
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {AppText} from "./ui/AppText";
import {AppTextBold} from "./ui/AppTextBold";

export const Todo = ({todo, onRemove, onOpen}) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.6} 
            onPress={() => onOpen(todo.id)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todo}>
                <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: THEME.BORDER_TODOS_COLOR,
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        fontFamily: 'roboto-bold',
    }
});