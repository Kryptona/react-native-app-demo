import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerButton} from "../components/DrawerButton";
import {CreateScreen} from "./CreateScreen";

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>
                Это приложение для личных заметок
            </Text>
            <Text>Версия приложения <Text style={styles.version}>1.0.0</Text></Text>
        </View>
    )
};

AboutScreen.options = ({navigation}) => ({
    title: 'О приложении',
    headerLeft: () => (
        <DrawerButton navigation={navigation}/>
    )
});

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    version: {
        fontFamily: 'open-bold'
    }
});