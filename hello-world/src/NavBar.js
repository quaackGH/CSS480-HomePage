import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link, useNavigate } from 'react-router-dom';

export function NavBar() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const links = [
        { path: '/CSS480-HomePage/', label: 'Home' },
        { path: '/things-to-read', label: 'Things to Read' },
        { path: '/gaming-achievements', label: 'Gaming Achievements' }
    ];

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
            } else if (event.key === 'ArrowLeft') {
                setCurrentIndex((prevIndex) => (prevIndex - 1 + links.length) % links.length);
            } else if (event.key === 'Enter') {
                navigate(links[currentIndex].path);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex, navigate, links]);

    useEffect(() => {
        const activeLink = document.getElementById(`nav-link-${currentIndex}`);
        if (activeLink) {
            activeLink.focus();
        }
    }, [currentIndex]);

    return (
        <nav>
            <ul>
                {links.map((link, index) => (
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            id={`nav-link-${index}`}
                            tabIndex={index === currentIndex ? 0 : -1}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default NavBar;
