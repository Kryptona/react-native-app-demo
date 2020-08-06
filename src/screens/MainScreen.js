import React, {useContext} from 'react'
import {StyleSheet, FlatList, View, Text, Dimensions} from 'react-native'
import {AddTodo} from '../components/AddTodo'
import {Todo} from '../components/Todo'
import {TodoContext} from "../context/todo/todoContext";
import {ScreenContext} from "../context/screen/screenContext";

export const MainScreen = () => {
    const {addTodo, todos, removeTodo} = useContext(TodoContext);
    const {changeScreen} = useContext(ScreenContext);
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