import React from "react";

import { Link } from 'react-router';

const LinkToPlay = (_) => <Link to="/play">Play</Link>
const LinkToPastGames = (_) => <Link to="/pastGames">Past Games</Link>
const LinkToAbout = (_) => <Link to="/about">About</Link>
const Header = (props) => {
    return (
        <div className="HeaderDiv">
            <table className="HeaderDivTable">
                <tbody>
                <tr>
                    <td><LinkToPlay/> </td>
                    <td><LinkToPastGames/> </td>
                    <td><LinkToAbout/> </td>
                </tr>
                </tbody>

            </table>
        </div>
    );
};

export { Header as default };
