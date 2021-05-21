import React from "react";
import {NavLink} from 'react-router-dom';

export default class Navigation extends React.Component {   
      render() {
        return (
            <div className="Navigation">
                <ul id="nav_list">
                <NavLink exact activeClassName="active" className="nav_link" to="/">
                    <li>Accueil</li>
                </NavLink>

                <NavLink exact activeClassName="active" className="nav_link" to="/Today">
                    <li>Offres du Jour</li>
                </NavLink>

                <NavLink exact activeClassName="active" className="nav_link" to="/Evaluate">
                    <li>Evaluate Offers</li>
                </NavLink>
                </ul>    
            </div>
        );
      }
    }


