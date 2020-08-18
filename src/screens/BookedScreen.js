﻿import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {DATA} from "../data";
import {Post} from "../components/Post";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";
import {DrawerButton} from "../components/DrawerButton";


export const BookedScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('PostScreen', {postId: post.id, date: post.date, isBooked: post.isBooked})
    };

    return <PostList data={DATA.filter(post => post.isBooked)} onOpen={openPostHandler}/>
    
};

BookedScreen.options = ({navigation}) => ({
    headerTitle: 'Избранное',
    headerLeft: () => (
        <DrawerButton navigation={navigation}/>
    )
});