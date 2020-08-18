import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerButton} from "../components/DrawerButton";

export const CreateScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>
                CreateScreen
            </Text>
        </View>
    )
};

CreateScreen.options = ({navigation}) => ({
    title: 'Создание поста',
    headerLeft: () => (
        <DrawerButton navigation={navigation}/>
    )
});

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});