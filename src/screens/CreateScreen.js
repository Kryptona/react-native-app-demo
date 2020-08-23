import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {DrawerButton} from "../components/DrawerButton";
import {useDispatch} from "react-redux";
import {THEME} from "../theme";
import {addPost} from "../store/actions/post";

export const CreateScreen = ({navigation}) => {
    
    const dispatch = useDispatch();
    
    const [text, setText] = useState('');
    const img = 'https://i.pinimg.com/236x/34/75/e9/3475e962e3bdb56bc973e667063bfdb7.jpg';
    const createPostHandler = () => {
        const post = {
            date: new Date().toJSON(),
            text: text,
            img: img,
            booked: false,
        };
        dispatch(addPost(post));
        navigation.navigate('MainScreen');
    };
    
    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>
                        + Создайте новый пост
                    </Text>
                    <TextInput
                        style={styles.textArea}
                        placeholder="Введите текст заметки"
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <Image
                        style={styles.img}
                        source={{uri: img}}
                    />
                    <Button style={styles.button} title='Создать пост' color={THEME.POWDER_PURUPURE}
                            onPress={createPostHandler}/>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
};

CreateScreen.options = ({navigation}) => ({
    title: 'Создать пост',
    headerLeft: () => (
        <DrawerButton navigation={navigation}/>
    )
});

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'open-regular',
        marginVertical: 10
    },
    img: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
    textArea: {
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: THEME.POWDER_PURUPURE,
        opacity: 0.5
    },
    button: {
        //marginTop: 10,
    }
});