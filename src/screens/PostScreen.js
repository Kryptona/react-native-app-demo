﻿import React, {useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView, Alert} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {THEME} from "../theme";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {removePost, toggleBooked} from "../store/actions/post";

export const PostScreen = ({route, navigation}) => {

    const dispatch = useDispatch();

    const postId = route.params.postId;

    const post = useSelector(state => state.post.allPosts.find(post => post.id === postId));

    const isBooked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId));

    useEffect(() => {
        if(post) {
            navigation.setParams({isBooked})
        }
    }, [isBooked]);

    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(postId));
    }, [dispatch, postId]);

    useEffect(() => {
        navigation.setParams({toggleHandler})
    }, [toggleHandler]);

    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы уверены, что хотите удалить пост?',
            [
                {
                    text: 'Отменить',
                    style: 'cancel'
                },
                {
                    text: 'Удалить',
                    style: 'destructive',
                    onPress() {
                        navigation.goBack();
                        dispatch(removePost(postId))
                    }
                }
            ],
            {cancelable: false}
        );
    };

    if (!post) {
        return null
    }

    return (
        <ScrollView>
            <View>
                <Image source={{uri: post.img}} style={styles.image}/>
                <View style={styles.textWrap}>
                    <Text style={styles.title}>
                        {post.text}
                    </Text>
                </View>
                <Button title='Delete' color={THEME.POWDER_PURUPURE_BT} onPress={removeHandler}/>
            </View>
        </ScrollView>
    )
};

PostScreen.options = ({route}) => {
    const {date, isBooked, toggleHandler} = route.params;

    const iconName = isBooked ? 'ios-star' : 'ios-star-outline';
    return {
        title: new Date(date).toLocaleDateString(),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take a photo" iconName={iconName} onPress={toggleHandler}/>
            </HeaderButtons>
        ),
    }
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    textWrap: {
        padding: 10,
    },
    title: {
        fontFamily: 'open-regular'
    }
});