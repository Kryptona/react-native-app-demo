import {THEME} from "../theme";
import {BookedScreen} from "../screens/BookedScreen";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {PostScreen} from "../screens/PostScreen";


const Booked = createStackNavigator();

export function BookedScreenNavigator() {
    return (
        <Booked.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: THEME.POWDER_PURUPURE,
                },
                headerTintColor: THEME.WHITE_PINK,
            }}
        >
            <Booked.Screen name="Booked" component={BookedScreen} />
            <Booked.Screen name="PostScreen" component={PostScreen} />
        </Booked.Navigator>
    );
}