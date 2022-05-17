import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import Widget from "./src/components/Widget";
import { theme } from "./src/theme";

export default function App() {
    const [appIsReady, setAppIsReady] = React.useState(false);

    useEffect(() => {
        async function preventSplashAutoHide() {
            try {
                await SplashScreen.preventAutoHideAsync();
                await Font.loadAsync({
                    Inter_400Regular,
                    Inter_500Medium,
                });
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }

        preventSplashAutoHide();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
            }}
            onLayout={onLayoutRootView}
        >
            <StatusBar
                style="light"
                backgroundColor="transparent"
                translucent
            />

            <Widget />
        </View>
    );
}
