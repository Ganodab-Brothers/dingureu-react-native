import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import Routes from './src/pages'

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
                    component={Routes.Splash}
                />
                <Screen
                    name="Login"
                    component={Routes.Login}
                />
                <Screen
                    name="RegisterMain"
                    component={Routes.Register.Main}
                />
                <Screen
                    name="RegisterSearchSchool"
                    component={Routes.Register.SearchSchool}
                />
                <Screen
                    name="RegisterCard"
                    component={Routes.Register.Card}
                />
                <Screen
                    name="Timeline"
                    component={Routes.Timeline}
                />
                <Screen
                    name="Write"
                    component={Routes.WriteStory}
                />
            </Navigator>
        </NavigationContainer>
    )
}

export default Router