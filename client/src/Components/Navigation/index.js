import React from "react";
import {Link} from 'react-router-dom';

export default class Navigation extends React.Component {   
      render() {
        return (
            <div className="Navigation">
                <ul>
                <Link to="/">
                    <li>Accueil</li>
                </Link>

                <Link to="/Today">
                    <li>Offres du Jour</li>
                </Link>
                </ul>    
            </div>
        );
      }
    }

