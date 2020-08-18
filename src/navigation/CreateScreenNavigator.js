import {createStackNavigator} from "@react-navigation/stack";
import {THEME} from "../theme";
import * as React from "react";
import {CreateScreen} from "../screens/CreateScreen";

const Create = createStackNavigator();

export const CreateNavigator = () => (
    <Create.Navigator
        initialRouteName="MainScreen"
        headerMode="screen"
        screenOptions={{
            headerStyle: {
                backgroundColor: THEME.POWDER_PURUPURE,
            },
            headerTintColor: THEME.WHITE_PINK,
        }}

    >
        <Create.Screen
            name="CreateScreen"
            component={CreateScreen}
            options={CreateScreen.options}
        />
    </Create.Navigator>
);

