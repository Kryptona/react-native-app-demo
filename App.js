import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {AppLoading} from 'expo';
import {bootstrap} from "./src/bootstrap";
import {MainNavigator} from './src/navigation/MainDrawerNavigator';
import {store} from './src/store'


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
        <Provider store={store}>
            <MainNavigator/>
        </Provider>
        
    );
}
