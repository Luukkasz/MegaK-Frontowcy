import React from 'react';
import {StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";
import {Dashboard} from "@/app/src/screens/Dashboard";
import {COLORS} from "@/app/src/themes/colors";

export default function Index() {
    return (
        <SafeAreaProvider>
            <StatusBar/>
            <SafeAreaView style={styles.container}>
                <Dashboard />
            </SafeAreaView>
        </SafeAreaProvider>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    }
})