import {NavigationContainer} from "@react-navigation/native";
import * as React from "react";
import {AppNavigation} from "./AppNavigation";
import {BookedScreenNavigator} from "./BookedNavigator"
import {Ionicons} from '@expo/vector-icons';
import {THEME} from "../theme";
import createMaterialBottomTabNavigator
    from "@react-navigation/material-bottom-tabs/src/navigators/createMaterialBottomTabNavigator";

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Blog"
                shifting={true}

            >
                <Tab.Screen
                    name="Blog"
                    component={AppNavigation}
                    options={{
                        tabBarColor: THEME.LIGHT_PINK,
                        tabBarLabel: 'Все',
                        tabBarIcon: ({color, size}) => (
                            <Ionicons name="ios-albums" size={24} color={color}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name="Booked"
                    component={BookedScreenNavigator}
                    options={{
                        tabBarColor: THEME.SITY_SKY,
                        tabBarLabel: 'Избранное',
                        tabBarIcon: ({color, size}) => (
                            <Ionicons name="ios-star" size={24} color={color}/>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};