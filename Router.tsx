import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import Route from './src/pages'

const { Screen, Navigator } = createStackNavigator()

const Router = () => {
    return (
        <Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                headerShown: false,
            }}
            headerMode="none"
        >
            <Screen
                name="Splash"
                component={Route.Splash}
            />
        </Navigator>
    )
}

export default Router