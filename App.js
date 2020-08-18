import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {TabsNavigation} from "./src/navigation/TabNavigation";
import {AppLoading} from 'expo';
import {bootstrap} from "./src/bootstrap";
import {MainNavigator} from './src/navigation/MainDrawerNavigator';


export default function App() {
    const [isReady, setIsReady] = useState(false);


    if (!isReady) {
        return <AppLoading
            startAsync={bootstrap}
            onFinish={() => setIsReady(true)}
            onError={err => console.log(err)}
        />
    }
    return (       
        //<TabsNavigation/>
        <MainNavigator/>
    );
}
