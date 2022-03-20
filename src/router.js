import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import NoticeMatch from './pages/NoticeMatch';
import NoticeHiring from './pages/NoticeHiring';
import NoticeTraining from './pages/NoticeTraining';
import NoticeRumor from './pages/NoticeRumor';
import Lineup from './pages/Lineup';
import FullSquad from './pages/FullSquad';

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Início"
                component={Home}
                options={{ headerShown: false }}
                />
                <Stack.Screen 
                name="NoticeMatch"
                component={NoticeMatch}
                />
                <Stack.Screen 
                name="NoticeHiring"
                component={NoticeHiring}
                />
                <Stack.Screen 
                name="NoticeTraining"
                component={NoticeTraining}
                />
                <Stack.Screen 
                name="NoticeRumor"
                component={NoticeRumor}
                />
                <Stack.Screen 
                name="Lineup"
                component={Lineup}
                />
                <Stack.Screen 
                name="FullSquad"
                component={FullSquad}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;