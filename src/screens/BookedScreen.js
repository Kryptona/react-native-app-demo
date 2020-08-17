import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {DATA} from "../data";
import {Post} from "../components/Post";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {AppHeaderIcon} from "../components/AppHeaderIcon";

// export const BookedScreen = ({navigation}) => {
//     const openPostHandler = (post) => {
//         navigation.navigate('PostScreen', {postId: post.id, date: post.date, isBooked: post.isBooked})
//     };
//     return (
//         <View style={styles.wrapper}>
//             <FlatList
//                 data={DATA.filter(post => post.isBooked)}
//                 keyExtractor={post => post.id.toString()}
//                 renderItem={({item}) =>
//                     <Post post={item} onOpen={openPostHandler}/>
//                 }
//             />
//         </View>
//     )
// };
//
// BookedScreen.options = {
//     headerTitle: 'Избранное',
//     headerLeft: (
//         <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
//             <Item title="Toggle Drawer" iconName="ios-menu"/>
//         </HeaderButtons>
//     )
// };
//
// const styles = StyleSheet.create({
//     wrapper: {
//         flex: 1,
//         padding: 10,
//     },
// });

export const BookedScreen = ({navigation}) => {
    console.log(navigation);
    const openPostHandler = (post) => {
        console.log(post);
        navigation.navigate('PostScreen', {postId: post.id, date: post.date, isBooked: post.isBooked})
    };
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA.filter(post => post.isBooked)}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) =>
                    <Post post={item} onOpen={openPostHandler}/>
                }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});