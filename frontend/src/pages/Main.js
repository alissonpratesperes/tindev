import React, { useEffect, useState } from 'react';
import './Main.css';
import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';
import api from '../services/api';

    function Main({ match }) {
        const [users, setUsers] = useState([]);

            useEffect(() => {
                async function loadUsers() {
                    const response = await api.get('/devs', { headers: { user: match.params.id } });
                        console.log(response.data);
                            setUsers(response.data);
                }
                loadUsers();
            }, [match.params.id]);

                async function handleDislike(id) {
                    await api.post(`/devs/${id}/dislikes`, null, { headers: { user: match.params.id } });
                        console.log(`User "${id}" disliked.`);
                }
                async function handleLike(id) {
                    console.log(`User "${id}" liked.`)
                }

                    return (
                        <div className="main-container">
                            <img src={logo} alt="tindev"/>
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
                        </div>
                    );
    }

        export default Main;