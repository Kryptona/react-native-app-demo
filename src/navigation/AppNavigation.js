﻿import 'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import {THEME} from "../theme";

const PostNavigator = createStackNavigator();

export const AppNavigation = () => (
    <PostNavigator.Navigator
        initialRouteName="MainScreen"
        headerMode="screen"
        screenOptions={{
            headerStyle: {
                backgroundColor: THEME.POWDER_PURUPURE,
            },
            headerTintColor: THEME.WHITE_PINK,
        }}

    >
        <PostNavigator.Screen
            name="PostScreen"
            component={PostScreen}
            options={PostScreen.options}
        />
        <PostNavigator.Screen
            name="MainScreen"
            component={MainScreen}
            options={{
                title: MainScreen.options.headerTitle,
                headerRight: () => (
                    MainScreen.options.headerRight
                ),
                headerLeft: () => (
                    MainScreen.options.headerLeft
                )
            }}
        />
    </PostNavigator.Navigator>
);








