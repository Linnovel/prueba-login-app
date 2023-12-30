import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function PasswordInput() {
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const handlePasswordChange = (text) => {
        setPassword(text);
        setPasswordError('');
    };
    const handleSubmit = () => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(password)) {
            setPasswordError('La contraseña debe tener al menos 8 caracteres, una mayuscula, un numero, y un simbolo.');
            return;
        }
        alert('Password is valid!!');
    };

    return (
        <>
            <View style={styles.inputContainer}>
                <Text style={styles.textStyle}>Password</Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={handlePasswordChange}
                    secureTextEntry
                    placeholder="Enter password"
                    placeholderTextColor="#A4A4A4"
                />
                <View style={styles.keyIconContainer}>
                    <Feather name="key" size={22} color="#A4A4A4" />
                </View>
                {passwordError && <Text style={styles.error}>{passwordError}</Text>}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <LinearGradient start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        colors={['#5851DB', '#C13584', '#E1306C', '#FD1D1D', '#F77737']} style={styles.buttonGradient}>
                        <Text style={styles.buttonText}>Sing up</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 12
    },
    input: {
        height: 50,
        width: 300,
        borderRadius: 8,
        borderWidth: 0.9,
        borderColor: 'rgba(255,255,255, 0.50)',
        paddingHorizontal: 36,
        backgroundColor: 'rgba(99, 97, 102, 0.3)',
    },
    textStyle: {
        color: '#A4A4A4',
        paddingBottom: 10
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
    button: {
        justifyContent: 'center',
        paddingTop: 16
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingTop: 14
    },
    buttonGradient: {
        width: 300,
        height: 50,
        borderRadius: 25,
    },
    keyIconContainer: {
        position: 'absolute',
        top: 54,
        left: 22
    }
})