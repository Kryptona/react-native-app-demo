import React, {useState, useContext} from 'react';
import {Navbar} from "./components/Navbar";
import {View, StyleSheet, Alert} from "react-native";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";
import {TodoContext} from "./context/todo/todoContext";
import {ScreenContext} from "./context/screen/screenContext";

export const MainLayout = () => {
    const {todoId} = useContext(ScreenContext);

    return (
        <View style={styles.mainContainer}>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                { todoId ? <TodoScreen/> : <MainScreen/>}
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    mainContainer: {
        flex: 1,
    }
});
