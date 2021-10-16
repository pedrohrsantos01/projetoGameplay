import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { theme } from '../global/styles/theme';
import { Routes } from '.';




const { Navigator, Screen } = createStackNavigator();


export function AuthRoutes()  {

    return (
        <Navigator 
        screenOptions = {{
            cardStyle: {
                backgroundColor: theme.colors.secondary100
                
            }, 
            headerShown: false
        }}
        >
            <Screen
            name = 'SignIn'
            component = {SignIn}
            /> 
            
            <Screen
            name = 'Home'
            component = {Home}
            />

        </Navigator>
    )
}
