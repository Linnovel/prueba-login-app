import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function SingUp({ alternatives }) {
    return (
        <View style={styles.singUpContainer}>
            <LinearGradient
                colors={['#92888C', '#77676D', '#503093']}
                style={styles.line}
                LinearGradientPoint={{ x: 0.1, y: 0.1 }}
            />
            <Text style={styles.textStyle}>{alternatives}</Text>
            <LinearGradient
                colors={['#C65647', '#CD9DAC', '#C65647']}
                style={styles.line}
                LinearGradientPoint={{ x: 0.1, y: 0.1 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#92888C',
        width: '20%',
    },
    textStyle: {
        color: '#92888C'
    },
    singUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        padding: 6
    }
})