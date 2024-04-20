import React from 'react';

export function NavBar() {
    return (
        <nav>
            <ul>
                <li><a href="#" tabIndex={1}>Home</a></li>
                <li><a href="#" tabIndex={2}>Things to Read</a></li>
            </ul>
        </nav>
    );
}