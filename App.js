import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const MyApp = () => {
    // Using useState to track password
    const [pw, setPw] = useState('');
    const [userType, setUserType] = useState('');

    const handleLogin = () => {
        if (pw) {
            ToastAndroid.show(`Logging in as ${userType}`, ToastAndroid.SHORT);
            setPw(''); // Clear password input
        } else {
            ToastAndroid.show('Please enter a password', ToastAndroid.SHORT);
        }
    };

    return (
        <View style={styles.container}>
            <Text>User Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => setUserType(value)}
                items={[
                    { label: 'Admin', value: 'Admin' },
                    { label: 'Guest', value: 'Guest' },
                ]}
            />
            <Text>Password:</Text>
            <TextInput
                style={{ borderWidth: 1, padding: 10, width: '80%', marginVertical: 10 }}
                onChangeText={(text) => setPw(text)}
                value={pw} // Controlled component
                secureTextEntry
                placeholder="Enter your password"
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        backgroundColor: '#841584',
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
});

export default MyApp;
