import createDrawerNavigator from "@react-navigation/drawer/src/navigators/createDrawerNavigator";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {TabsNavigation} from "./TabNavigation";
import {AboutNavigator} from "./AboutNavigator";
import {CreateNavigator} from "./CreateScreenNavigator";
import {AboutScreen} from "../screens/AboutScreen";
import {CreateScreen} from "../screens/CreateScreen";

const Main = createDrawerNavigator();

export const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Main.Navigator>
                <Main.Screen name="Main" component={TabsNavigation}/>
                <Main.Screen name="About" component={AboutNavigator} options={AboutScreen.options}/>
                <Main.Screen name="Create" component={CreateNavigator} options={CreateScreen.options} />    
            </Main.Navigator>
        </NavigationContainer>
    )
};