import React from 'react';
import '../App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from '../pages/Login';
import { Logout } from '../pages/Logout';

export function NavBar() {
    const { isAuthenticated } = useAuth0();
        return (
            <nav className="navbar">
                <ul className="list">
                    {isAuthenticated ? (
                        <>
                    <li className="list-item"><a href="../" className="list-item-link">Home</a></li>
                    <li className="list-item"><a href="/AdminBudget" className="list-item-link">Admin budget</a></li>
                    <li className="list-item"><a href="/AddBudget" className="list-item-link">Add Budget</a></li>
                    <li className="list-item"><Logout /></li>
                    </>
                    ) : (
                        <>
                    <li className="list-item"><a href="../" className="list-item-link">Home</a></li>
                    <li className="list-item"><LoginButton className="list-item-link"/></li>
                    </>
                    )}
                </ul>                
            </nav>
        )
    }
export default NavBar
