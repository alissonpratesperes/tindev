import React from 'react';
import { View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png';
import dislike from '../assets/dislike.png';
import like from '../assets/like.png';

    export default function Main() {
        return (
            <SafeAreaView style={styles.container}>
                <Image style={styles.logo} source={logo}/>
                    <View style={styles.cardsContainer}>
                        <View style={[styles.card, { zIndex: 3 }]}>
                            <Image style={styles.avatar} source={{ uri: 'https://avatars.githubusercontent.com/u/52282116?v=4' }}/>
                                <View style={styles.footer}>
                                    <Text style={styles.name}> Alisson Prates Peres </Text>
                                    <Text style={styles.bio} numberOfLines={3}> Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. </Text>
                                </View>
                        </View>
                        <View style={[styles.card, { zIndex: 2 }]}>
                            <Image style={styles.avatar} source={{ uri: 'https://avatars.githubusercontent.com/u/52282116?v=4' }}/>
                                <View style={styles.footer}>
                                    <Text style={styles.name}> Alisson Prates Peres </Text>
                                    <Text style={styles.bio} numberOfLines={3}> Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. </Text>
                                </View>
                        </View>
                        <View style={[styles.card, { zIndex: 1 }]}>
                            <Image style={styles.avatar} source={{ uri: 'https://avatars.githubusercontent.com/u/52282116?v=4' }}/>
                                <View style={styles.footer}>
                                    <Text style={styles.name}> Alisson Prates Peres </Text>
                                    <Text style={styles.bio} numberOfLines={3}> Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. Newbie but focused. </Text>
                                </View>
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Image source={dislike}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image source={like}/>
                        </TouchableOpacity>
                    </View>
            </SafeAreaView>
        );
    }

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#F5F5F5',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            logo: {
                marginTop: 30
            },
            cardsContainer: {
                flex: 1,
                alignSelf: 'stretch',
                justifyContent: 'center',
                maxHeight: 500,
            },
            card: {
                borderWidth: 1,
                borderColor: '#DDDDDD',
                borderRadius: 8,
                margin: 30,
                overflow: 'hidden',
                position: 'absolute',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            },
            avatar: {
                flex: 1,
                height: 300
            },
            footer: {
                backgroundColor: '#FFFFFF',
                paddingHorizontal: 20,
                paddingVertical: 15
            },
            name: {
                fontSize: 16,
                fontWeight: 'bold',
                color: '#333333'
            },
            bio: {
                fontSize: 14,
                color: '#999999',
                marginTop: 5,
                lineHeight: 18
            },
            buttonsContainer: {
                flexDirection: 'row',
                marginBottom: 30
            },
            button: {
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#FFFFFF',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: 20,
                elevation: 2,
                shadowColor: '#000000',
                shadowOpacity: 0.05,
                shadowRadius: 2,
                shadowOffset: { width: 0, height: 2 }
            },
        });