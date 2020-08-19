import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {PostList} from "../components/PostList";
import {DrawerButton} from "../components/DrawerButton";
import {loadPosts} from "../store/actions/post";

export const MainScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('PostScreen', {postId: post.id, date: post.date, isBooked: post.isBooked})
    };


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch]);
    
    const allPosts = useSelector(state => state.post.allPosts);

    return <PostList data={allPosts} onOpen={openPostHandler}/>
};

MainScreen.options = ({navigation}) => ({
    title: 'Мой блог',
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title="Take a photo"
                iconName="ios-camera"
                onPress={() => navigation.push('CreateScreen')}
            />
        </HeaderButtons>
    ),
    headerLeft: () => (
        <DrawerButton navigation={navigation}/>
    )
});
