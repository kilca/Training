import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import ProjectScreen from '../screens/Project/ProjectScreen';
import TaskScreen from '../screens/Project/Task/TaskScreen';
const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName='Project'>
            <Screen name="Project" component={ProjectScreen} />
            <Screen name="Task" component={TaskScreen} />
            </Navigator>
        </NavigationContainer>
    )


}
export default AppNavigator;