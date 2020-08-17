import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {DATA} from "../data";
import {Post} from "../components/Post";
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const MainScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('PostScreen', {postId: post.id, date: post.date, isBooked: post.isBooked})
    };
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) =>
                    <Post post={item} onOpen={openPostHandler}/>
                }
            />
        </View>
    )
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

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
    },
});