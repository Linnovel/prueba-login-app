import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import { BlurView } from 'expo-blur';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import SingUp from '../components/SingUp';
import SquareIcons from '../components/SquareIcons';
import PasswordInput from '../components/PasswordInput';
import { LinearGradient } from 'expo-linear-gradient';


export default function LoginScreen({ title, subTitle }) {
    return (
        <>
            <View style={styles.container}>
                <LinearGradient
                    colors={['#151316', '#41294F']}
                    style={styles.container}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <BlurView intensity={18} tint='light' style={styles.blurContainer}>
                        <View style={styles.login}>
                            <Text style={styles.titleStyle}>{title}</Text>
                            <Text style={styles.subTitleStyle}>{subTitle}</Text>
                            <View style={styles.inputContainer}>
                                <Text style={styles.textStyle}>Email Adress</Text>
                                <TextInput keyboardType='email-address' placeholderTextColor="#A4A4A4" style={styles.inputStyle} placeholder='yourname@gmail.com' />
                                <View style={styles.iconContainer}>
                                    <MaterialCommunityIcons name="email-outline" size={22} color="#A4A4A4" />
                                </View>
                            </View>
                            <View style={styles.inputContainer}>
                                <Text style={styles.textStyle}>Your Name</Text>
                                <TextInput keyboardType='default' placeholderTextColor="#A4A4A4" style={styles.inputStyle} placeholder='@yourname' />
                                <View style={styles.userIconContainer}>
                                    <AntDesign name="user" size={22} color="#A4A4A4" />
                                </View>
                            </View>
                            <PasswordInput />
                            <SingUp alternatives="Or sing up with" />
                            <SquareIcons />
                        </View>
                    </BlurView>
                </LinearGradient>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },
    login: {
        width: 350,
        height: 550,
        alignItems: 'center',
        paddingTop: 8,
        paddingLeft: 24
    },
    blurContainer: {
        overflow: 'hidden',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
    },
    titleStyle: {
        fontSize: 40,
        color: '#EFEFEF',
        fontWeight: 'bold',
    },
    subTitleStyle: {
        color: '#A4A4A4'
    },
    inputContainer: {
        padding: 8
    },
    inputStyle: {
        height: 50,
        width: 300,
        borderRadius: 8,
        borderWidth: 0.9,
        borderColor: 'rgba(255,255,255, 0.50)',
        paddingHorizontal: 48,
        backgroundColor: 'rgba(99, 97, 102, 0.3)',
    },
    textStyle: {
        color: '#A4A4A4',
        paddingBottom: 10
    },
    iconContainer: {
        position: 'absolute',
        top: 50,
        left: 22
    },
    userIconContainer: {
        position: 'absolute',
        top: 50,
        left: 22
    },
});
