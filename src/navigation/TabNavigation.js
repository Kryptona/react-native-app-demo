import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
// import {BookedScreen} from "../screens/BookedScreen";
import * as React from "react";
import {AppNavigation} from "./AppNavigation";
import {BookedScreenNavigator} from "./BookedNavigator"
import {Ionicons} from '@expo/vector-icons';
import {THEME} from "../theme";
import createMaterialBottomTabNavigator
    from "@react-navigation/material-bottom-tabs/src/navigators/createMaterialBottomTabNavigator";

// const Tab = createBottomTabNavigator();

const Tab = createMaterialBottomTabNavigator();

export const TabsNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                activeTintColor: THEME.POWDER_PURUPURE
            }}>
                <Tab.Screen
                    name="Blog"
                    component={AppNavigation}
                    options={{
                        tabBarLabel: 'Все',
                        tabBarIcon: ({color, size}) => (
                            <Ionicons name="ios-albums" size={24} color={color} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Booked" 
                    component={BookedScreenNavigator}
                    options={{
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