﻿import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {THEME} from '../theme.js';

export const Navbar = props => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>TODO App</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: THEME.MAIN_COLOR,
        alignItems: 'center',
        height: 100,
        justifyContent: "flex-end",
        paddingBottom: 15,
    },
    text: {
        color: 'white',
        fontSize: 20,
    }
});