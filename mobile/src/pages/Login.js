import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';

    export default function Login({ navigation }) {
        const [user, setUser] = useState('');
        
            function handleLogin() {
                    navigation.navigate('Main');
                        console.log(`User "${user}" logged.`);
            }

                return (
                    <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === 'ios'} style={styles.container}>
                        <Image source={logo}/>
                            <TextInput autoCapitalize="none" autoCorrect={false} placeholder="Insira seu usuário do GitHub" placeholderTextColor="#999999" style={styles.input} value={user} onChangeText={setUser}/>
                                <TouchableOpacity onPress={handleLogin} style={styles.button}>
                                    <Text style={styles.buttonText}> Entrar </Text>
                                </TouchableOpacity>
                    </KeyboardAvoidingView>
                );
    }

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#F5F5F5',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 30,
            },
            input: {
                height: 50,
                alignSelf: 'stretch',
                backgroundColor: '#FFFFFF',
                borderWidth: 1,
                borderColor: '#DDDDDD',
                borderRadius: 10,
                marginTop: 20,
                paddingHorizontal: 20,
                fontSize: 20,
                color: '#666666'
            },
            button: {
                height: 50,
                alignSelf: 'stretch',
                backgroundColor: "#DF4723",
                borderRadius: 10,
                marginTop: 10,
                justifyContent: 'center',
                alignItems: 'center'
            },
            buttonText: {
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: 16,
                textTransform: 'uppercase'
            }
        });