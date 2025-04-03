import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer>
            <p>&copy; 2025 Cyber Ai - All rights reserved.</p>
            {/* <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p> */}
            <p>Follow us on:
                <Link href="#"> Facebook</Link> |
                <Link href="#"> Twitter</Link> |
                <Link href="https://www.linkdin.com/in/himanshu-bisht-a6b7b8347" target='_blank' rel="noopener noreferrer" > LinkdIn</Link>
            </p>
        </footer>
    )
}
