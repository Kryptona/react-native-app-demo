import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DrawerButton} from "../components/DrawerButton";
import {CreateScreen} from "./CreateScreen";

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>
                AboutScreen
            </Text>
        </View>
    )
};

AboutScreen.options = ({navigation}) => ({
    title: 'О разработчиках',
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