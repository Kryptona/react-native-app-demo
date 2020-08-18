import {AppHeaderIcon} from "./AppHeaderIcon";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import React from "react";

export const DrawerButton = ({navigation}) => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
            title="Toggle Drawer"
            iconName="ios-menu"
            onPress={() => navigation.toggleDrawer()}
        />
    </HeaderButtons>
); 
