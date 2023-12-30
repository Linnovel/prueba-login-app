import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

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
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    singUpContainer: {
        flexDirection: 'row',
        gap: 12,
    },
    squareContainer: {
        width: deviceWidth < 365 ? 62 : 60,
        height: deviceHeight < 365 ? 62 : 55,
        borderRadius: 13,
        backgroundColor: 'rgba(255,255,255,0.13)',
        borderColor: 'rgba(255,255,255, 0.50)',
        borderWidth: 0.3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
    },
    iconStyle: {
        alignSelf: 'center',
        paddingTop: 15
    }
})