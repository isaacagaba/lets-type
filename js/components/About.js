import React from "react";


const About = (props) => {
    return (
        <div>
            <h1>About the game</h1>
            <h3>Developer : Isaac Agaba</h3>
            <p>This is a speed typing application which connects to players to chat with one another or to play solo </p>
            <h2>Playing Game</h2>
            <ul>
                <li> Click start Button</li>
                <li>Words to type will be uploaded  </li>
                <li>When you type the statistics will be displayed </li>
                <li> To stop the game  kindly click on the stop Game Button </li>

            </ul>
            <h2>Past Games</h2>
            <ul>
                <li>This view will list all your games played in the past </li>
            </ul>
        </div>
    );
};

export { About as default };
