import {createStackNavigator} from "@react-navigation/stack";
import {THEME} from "../theme";
import * as React from "react";
import {AboutScreen} from "../screens/AboutScreen";

const About = createStackNavigator();

export const AboutNavigator = () => (
    <About.Navigator
        initialRouteName="MainScreen"
        headerMode="screen"
        screenOptions={{
            headerStyle: {
                backgroundColor: THEME.POWDER_PURUPURE,
            },
            headerTintColor: THEME.WHITE_PINK,
        }}

    >
        <About.Screen
            name="AboutScreen"
            component={AboutScreen}
            options={AboutScreen.options}
        />
    </About.Navigator>
);

