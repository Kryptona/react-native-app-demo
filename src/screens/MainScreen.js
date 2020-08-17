import React from 'react';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {DATA} from "../data";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";

export const MainScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('PostScreen', {postId: post.id, date: post.date, isBooked: post.isBooked})
    };
    return <PostList data={DATA} onOpne={openPostHandler}/>
    
};

MainScreen.options = {
    headerTitle: 'Мой блог',
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Take a photo" iconName="ios-camera" onPress={() => console.log("1234")}/>
        </HeaderButtons>
    ),
    headerLeft: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => console.log("1234")}/>
        </HeaderButtons>
    )
};
