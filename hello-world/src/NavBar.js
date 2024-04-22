import React, { useEffect } from 'react';
import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';

export function NavBar() {
    const navigate = useNavigate();

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.ctrlKey && event.key === 'ArrowRight') {
                navigate('/things-to-read');
            } else if (event.ctrlKey && event.key === 'ArrowLeft') {
                navigate('/CSS480-HomePage/');
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [navigate]);

    return (
        <nav>
            <ul>
                <li><Link to="/CSS480-HomePage/" tabIndex="0">Home</Link></li>
                <li><Link to="/things-to-read" tabIndex="0">Things to Read</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
