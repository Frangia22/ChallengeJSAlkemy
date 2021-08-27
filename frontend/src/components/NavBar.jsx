import React from 'react';
import '../App.css';

export function NavBar() {
        return (
            <nav className="navbar">
                <ul className="list">
                    <li className="list-item"><a href="../" className="list-item-link">Home</a></li>
                    <li className="list-item"><a href="/AdminBudget" className="list-item-link">Admin budget</a></li>
                    <li className="list-item"><a href="/AddBudget" className="list-item-link">Add Budget</a></li>
                </ul>                
            </nav>
        )
    }
export default NavBar
