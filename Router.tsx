import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import Route from './src/pages'

const { Screen, Navigator } = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
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
                <Screen
                    name="Login"
                    component={Route.Login}
                />
                <Screen
                    name="RegisterMain"
                    component={Route.Register.Main}
                />
                <Screen
                    name="RegisterSearchSchool"
                    component={Route.Register.SearchSchool}
                />
                <Screen
                    name="RegisterCard"
                    component={Route.Register.Card}
                />
                <Screen
                    name="Timeline"
                    component={Route.Timeline}
                />
                <Screen
                    name="Write"
                    component={Route.Write}
                />
            </Navigator>
        </NavigationContainer>
    )
}

export default Router