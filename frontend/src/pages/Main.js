import React from 'react';
import './Main.css';
import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

    function Main({ match }) {
        return (
            <div className="main-container">
                <img src={logo} alt="tindev"/>
                    <ul>
                        <li>
                            <img src="https://avatars.githubusercontent.com/u/52282116?v=4" alt="Developer Avatar"/>
                                <footer>
                                    <strong> Alisson Prates Peres </strong>
                                        <p> Newbie but focused. </p>
                                </footer>
                                    <div className="buttons">
                                        <button type="button"> <img src={dislike} alt="Dislike"/> </button>
                                        <button type="button"> <img src={like} alt="Like"/> </button>
                                    </div>
                        </li>
                        <li>
                            <img src="https://avatars.githubusercontent.com/u/2254731?v=4" alt="Developer Avatar"/>
                                <footer>
                                    <strong> Diego Fernandes </strong>
                                        <p> CTO at @Rocketseat. Passionate about education and changing people's lives through programming. </p>
                                </footer>
                                    <div className="buttons">
                                        <button type="button"> <img src={dislike} alt="Dislike"/> </button>
                                        <button type="button"> <img src={like} alt="Like"/> </button>
                                    </div>
                        </li>
                        <li>
                            <img src="https://avatars.githubusercontent.com/u/6643122?v=4" alt="Developer Avatar"/>
                                <footer>
                                    <strong> Mayk Brito </strong>
                                        <p> An instructor focused on helping people start programming for web - #html #css #javascript #sql #react #nodejs #fullstack </p>
                                </footer>
                                    <div className="buttons">
                                        <button type="button"> <img src={dislike} alt="Dislike"/> </button>
                                        <button type="button"> <img src={like} alt="Like"/> </button>
                                    </div>
                        </li>
                        <li>
                            <img src="https://avatars.githubusercontent.com/u/4248081?v=4" alt="Developer Avatar"/>
                                <footer>
                                    <strong> Filipe Deschamps </strong>
                                        <p> Vou fazer você se apaixonar por programação! </p>
                                </footer>
                                    <div className="buttons">
                                        <button type="button"> <img src={dislike} alt="Dislike"/> </button>
                                        <button type="button"> <img src={like} alt="Like"/> </button>
                                    </div>
                        </li>
                    </ul>
            </div>
        );
    }

        export default Main;