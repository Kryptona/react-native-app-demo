import React from 'react';
import {useSelector} from "react-redux";
import {PostList} from "../components/PostList";
import {DrawerButton} from "../components/DrawerButton";


export const BookedScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('PostScreen', {postId: post.id, date: post.date, isBooked: post.isBooked})
    };
    
    const bookedPosts = useSelector(state => state.post.bookedPosts);

    return <PostList data={bookedPosts} onOpen={openPostHandler}/>
    
};

BookedScreen.options = ({navigation}) => ({
    headerTitle: 'Избранное',
    headerLeft: () => (
        <DrawerButton navigation={navigation}/>
    )
});