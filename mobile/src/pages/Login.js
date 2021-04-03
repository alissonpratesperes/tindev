import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';

    export default function Login() {
        return (
            <View style={styles.container}>
                <Image source={logo}/>
                    <TextInput placeholder="Insira seu usuário do GitHub" placeholderTextColor="#999999" style={styles.input}/>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}> Entrar </Text>
                        </TouchableOpacity>
            </View>
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