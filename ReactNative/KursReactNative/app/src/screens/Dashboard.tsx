import React from 'react'
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {COLORS} from "@/app/src/themes/colors";
import {Ionicons} from '@expo/vector-icons';
import {FollowingDays} from "@/app/src/components/FollowingDays";

export type FollowingDay = {
    name: string,
    value: number,
    type: string,
}

const FOLLOWING_DAYS: FollowingDay[] = [
    {
        name: 'Dzisiaj',
        value: 22,
        type: 'sun'
    },
    {
        name: 'Wtorek',
        value: 22,
        type: 'sun'
    },
    {
        name: 'Środa',
        value: 22,
        type: 'sun'
    },
]


export const Dashboard = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.cityName}>Warszawa</Text>
                <Text style={styles.temperature}>22°</Text>
                <View style={styles.weatherContainer}>
                    <Ionicons name="sunny-outline" size={100} color={COLORS.sun}/>
                    <Text style={styles.weather}>Słonecznie</Text>
                </View>

                <View style={styles.followingDaysContainer}>
                    {FOLLOWING_DAYS.map((day, index) => (
                        <FollowingDays key={index} day={day} isLast={index === FOLLOWING_DAYS.length - 1} />
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    weatherContainer: {
        alignItems: "center",
        marginTop: 10,
    },
    cityName: {
        fontSize: 36,
        color: COLORS.text,
        marginTop: 26,
    },
    temperature: {
        fontSize: 72,
        fontWeight: "600",
        color: COLORS.text,
        marginTop: 20,
    },
    weather: {
        fontSize: 26,
        color: COLORS.text,
    },
    followingDaysContainer: {
        margin: 20,
        marginTop: 40,
        backgroundColor: COLORS.lightBlue,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
})
