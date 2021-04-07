import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, SafeAreaView, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import api from '../services/api';
import logo from '../assets/logo.png';
import dislike from '../assets/dislike.png';
import like from '../assets/like.png';

    export default function Main({ navigation }) {
        const id = navigation.getParam('user');
        const [users, setUsers] = useState([]); 

            console.log(`User "${id}" logged.`);

                useEffect(() => {
                    async function loadUsers() {
                        const response = await api.get('/devs', { headers: { user: id } });
                            console.log(response.data);
                                setUsers(response.data);
                    }
                        loadUsers();
                }, [id]);

                    async function handleDislike(id) {
                        await api.post(`/devs/${id}/dislikes`, null, { headers: { user: id } });
                            console.log(`User "${id}" disliked.`);
                                setUsers(users.filter(user => user._id !== id));
                    }
                    async function handleLike(id) {
                        await api.post(`/devs/${id}/likes`, null, { headers: { user: id } });
                            console.log(`User "${id}" liked.`);
                                setUsers(users.filter(user => user._id !== id));
                    }
                    async function handleLogout() {
                        await AsyncStorage.clear();
                            navigation.navigate('Login');
                    }

                        return (
                            <SafeAreaView style={styles.container}>
                                <TouchableOpacity onPress={handleLogout}>
                                    <Image style={styles.logo} source={logo}/>
                                </TouchableOpacity>
                                    <View style={styles.cardsContainer}>
                                        {users.length === 0 ? <Text style={styles.empty}> 🧑🏻‍💻 Nenhum <Text style={styles.emptySpan}>dev</Text> encontrado 🤦🏻‍♂️ </Text> : (
                                            users.map((user, index) => (
                                                <View key={user._id} style={[styles.card, { zIndex: users.length - index }]}>
                                                    <Image style={styles.avatar} source={{ uri: user.avatar }}/>
                                                        <View style={styles.footer}>
                                                            <Text style={styles.name}> {user.name} </Text>
                                                            <Text style={styles.bio} numberOfLines={3}> {user.bio} </Text>
                                                        </View>
                                                </View>
                                            ))
                                        )}
                                    </View>
                                    <View style={styles.buttonsContainer}>
                                        <TouchableOpacity style={[styles.button, styles.dislikeButton]}>
                                            <Image source={dislike}/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[styles.button, styles.likeButton]}>
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
            empty: {
                alignSelf: 'center',
                color: '#999999',
                fontSize: 25,
                fontWeight: 'bold'
            },
            emptySpan: {
                color: '#DF4723'
            },
            card: {
                borderRadius: 10,
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
                fontSize: 18,
                fontWeight: 'bold',
                color: '#333333'
            },
            bio: {
                fontSize: 16,
                lineHeight: 20,
                color: '#999999',
                marginTop: 10
                
            },
            buttonsContainer: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 30,
                marginRight: 30,
                marginBottom: 30,
                alignSelf: 'stretch'

            },
            button: {
                width: 150,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            },
            dislikeButton: {
                backgroundColor: 'rgba(252, 100, 100, 0.15)'
            },
            likeButton: {
                backgroundColor: 'rgba(68, 236, 204, 0.15)'
            },
        });