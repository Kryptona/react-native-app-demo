import React from 'react';
import {StyleSheet, View} from 'react-native';

export const AppCard = props => (
    <View style={styles.default}>
        {props.children}
    </View>
);

const styles = StyleSheet.create({
    default: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 9,
        backgroundColor: '#fff',
        borderRadius: 10, 
        
    }

});