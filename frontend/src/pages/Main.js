import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import './Main.css';
import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import itsamatch from '../assets/itsamatch.png';
import api from '../services/api';

    function Main({ match }) {
        const [users, setUsers] = useState([]);
        const [matchDev, setMatchDev] = useState(true);

            useEffect(() => {
                async function loadUsers() {
                    const response = await api.get('/devs', { headers: { user: match.params.id } });
                        console.log(response.data);
                            setUsers(response.data);
                }
                    loadUsers();
            }, [match.params.id]);
            useEffect(() => {
                const socket = io('http://localhost:3333', {
                    query: { user: match.params.id }
                });
                    socket.on('match', dev => {
                        console.log(dev);
                    });
            }, [match.params.id]);

                async function handleDislike(id) {
                    await api.post(`/devs/${id}/dislikes`, null, { headers: { user: match.params.id } });
                        console.log(`User "${id}" disliked.`);
                            setUsers(users.filter(user => user._id !== id));
                }
                async function handleLike(id) {
                    await api.post(`/devs/${id}/likes`, null, { headers: { user: match.params.id } });
                        console.log(`User "${id}" liked.`);
                            setUsers(users.filter(user => user._id !== id));
                }

                    return (
                        <div className="main-container">
                            <Link to="/">
                                <img src={logo} className="mainLogo" alt="tindev"/>
                            </Link>
                                {users.length > 0 ? (
                                    <ul>
                                        {users.map(user => (
                                            <li key={user._id}>
                                                <img src={user.avatar} alt={user.name}/>
                                                    <footer>
                                                        <strong> {user.name} </strong>
                                                            <p> {user.bio} </p>
                                                    </footer>
                                                        <div className="buttons">
                                                            <button type="button" className="dislike" onClick={() => handleDislike(user._id)}> <img src={dislike} alt="Dislike"/> </button>
                                                            <button type="button" className="like" onClick={() => handleLike(user._id)}> <img src={like} alt="Like"/> </button>
                                                        </div>
                                            </li> 
                                        ))} 
                                    </ul>
                                ) : (
                                    <div className="empty"> 🧑🏻‍💻 Nenhum <span className="emptySpan">dev</span> encontrado 🤦🏻 </div>
                                )}
                                {matchDev && (
                                    <div className="match-container">
                                        <img src={itsamatch} alt="It's a Match!"/>
                                        <img className="avatar" src="https://avatars.githubusercontent.com/u/52282116?v=4" alt="Alisson Prates Peres"/>
                                            <strong> Alisson Prates Peres </strong>
                                                <p> Newbie but focused. </p>
                                                    <button type="button" onClick={() => setMatchDev(null)}> Fechar </button>
                                    </div>
                                )}
                        </div>
                    );
    }

        export default Main;