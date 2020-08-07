import React, {useContext, useEffect, useCallback} from 'react'
import {StyleSheet, FlatList, View, Text, Dimensions} from 'react-native'
import {AddTodo} from '../components/AddTodo'
import {Todo} from '../components/Todo'
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";
import {AppLoader} from "../components/ui/AppLoader";

export const MainScreen = () => {
    const {addTodo, todos, removeTodo, fetchTodos, loading, error} = useContext(TodoContext);
    const {changeScreen} = useContext(ScreenContext)
    
    const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);
    
    useEffect(() => {
        loadTodos()
    }, []);
    
    if(loading) {
        return (
            <AppLoader/>
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

const styles = StyleSheet.create({});