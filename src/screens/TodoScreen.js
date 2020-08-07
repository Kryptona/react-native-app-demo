import React, {useState, useContext} from 'react'
import {StyleSheet, View, Text, Button, Dimensions} from 'react-native'
import {THEME} from '../theme.js'
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";
import {AppButton} from "../components/ui/AppButton";
import {EvilIcons, AntDesign} from '@expo/vector-icons';
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";


export const TodoScreen = () => {

    const {todos, updateTodo, removeTodo} = useContext(TodoContext);
    const {todoId, changeScreen} = useContext(ScreenContext);

    const [modal, setModal] = useState(false);

    const todo = todos.find(t => t.id === todoId);

    const saveHandler = async title => {
        await updateTodo(todo.id, title);
        setModal(false);
    };

    return (
        <View>
            <EditModal
                value={todo.title}
                visible={modal}
                onCancel={() => setModal(false)}
                onSave={saveHandler}
            />
            <AppCard>
                <Text style={styles.title}>{todo.title}</Text>
                <AppButton onPress={() => setModal(true)}>
                    <AntDesign name="edit" size={22}/>
                </AppButton>
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton
                        onPress={() => changeScreen(null)}
                        color={THEME.BACk_COLOR}
                    >
                        <AntDesign name="back" size={24}/>
                    </AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton
                        color={THEME.DANGER_COLOR}
                        onPress={() => removeTodo(todo.id)}
                    >
                        <EvilIcons name="trash" size={30}/>
                    </AppButton>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    buttons: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: 52,
    },
    button: {
        width: Dimensions.get('window').width * 0.4,
    },
    title: {
        fontSize: 26,
    }
});