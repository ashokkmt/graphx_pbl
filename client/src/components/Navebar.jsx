import React, { useState, Navigate } from 'react'
import "../styles/Navebar.css"
import { Link, useNavigate } from 'react-router-dom'

export default function Navebar() {

    const [hamb, changehamb] = useState(false);
    const navigate = useNavigate();

    const Show_Nav_Links = () =>{
        changehamb(!hamb);
    }


    return (
        <nav className="navbar">
            <div className="logo" onClick={()=> navigate("/")} >Cyber Ai</div>
            <div className="nav-buttons">
                <ul className={hamb ? "mobile-ham" : "nav-links"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Me</Link></li>
                    <li><Link to="/Projects">Projects</Link></li>
                    <li><Link to="/Activity">Activity</Link></li>
                </ul>
                
                <svg onClick={Show_Nav_Links} className='hamburger' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" color="#54af6b" fill="none">
                <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </nav>
    )
}

