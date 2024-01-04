import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { scale, verticalScale, moderateScale, useDimensions, ScaledSheet } from 'react-native-size-matters';


export default function SquareIcons() {
    return (
        <>
            <View style={styles.singUpContainer}>
                <View style={styles.squareContainer}>
                    <AntDesign style={styles.iconStyle} name="google" size={24} color="black" />
                </View>
                <View style={styles.squareContainer}>
                    <AntDesign style={styles.iconStyle} name="apple1" size={24} color="white" />
                </View>
                <View style={styles.squareContainer}>
                    <Entypo style={styles.iconStyle} name="facebook-with-circle" size={24} color="#0A66C2" />
                </View>
            </View>
        </>
    )
}


const styles = ScaledSheet.create({
    singUpContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    squareContainer: {
        width: '60@s',
        height: '55@ms',
        borderRadius: '13@s',
        backgroundColor: 'rgba(255,255,255,0.13)',
        borderColor: 'rgba(255,255,255, 0.50)',
        borderWidth: '0.3@s',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    iconStyle: {
        alignSelf: 'center',
        paddingTop: '15@vs'
    }
})