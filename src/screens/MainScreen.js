import React, {useContext, useEffect, useCallback} from 'react'
import {StyleSheet, FlatList, View, Text} from 'react-native'
import {AddTodo} from '../components/AddTodo'
import {Todo} from '../components/Todo'
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";
import {AppLoader} from "../components/ui/AppLoader";
import {AppText} from "../components/ui/AppText";
import {THEME} from "../theme";
import {AppButton} from "../components/ui/AppButton";

export const MainScreen = () => {
    const {addTodo, todos, removeTodo, fetchTodos, loading, error} = useContext(TodoContext);
    const {changeScreen} = useContext(ScreenContext)

    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

    useEffect(() => {
        loadTodos()
    }, []);

    if (loading) {
        return (
            <AppLoader/>
        )
    }

    if (error) {
        return (
            <View style={styles.center}>
                <AppText style={styles.error}>{error}</AppText>
                <AppButton onPress={loadTodos}>Retry</AppButton>
            </View>
        )
    }

    return (
        <View>
            <AddTodo onSubmit={addTodo}/>

            {(todos.length > 0) ? <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => (
                    <Todo todo={item}
                          onRemove={removeTodo}
                          onOpen={changeScreen}
                    />
                )}
            /> : <Text>Еще нет задач</Text>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        fontSize: 20,
        color: THEME.DANGER_COLOR,
    },
});