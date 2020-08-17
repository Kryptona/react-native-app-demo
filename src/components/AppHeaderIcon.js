import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {THEME} from "../theme";
import {Ionicons} from '@expo/vector-icons'

export const AppHeaderIcon = props => (<HeaderButton
    {...props}
    //title="icon"
    iconSize={24}
    IconComponent={Ionicons}
    color={THEME.WHITE_PINK}
/>);
