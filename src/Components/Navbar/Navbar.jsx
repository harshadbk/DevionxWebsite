import React, { useState } from 'react'
import './Navbar.css'


const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false);


    const navLinks = [
        { id: 1, name: "Home", href: "/" },
        { id: 2, name: "Services", href: "/service" },
        { id: 3, name: "Industries", href: "/industries" },
        { id: 4, name: "About", href: "/about" },
        { id: 5, name: "Contact", href: "/contact" },

    ]
    const btnLink = [
        { id: 1, btnname: "Get Quote", href: "/reachus" }
    ]

    const currentPath = window.location.pathname;

    
    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div>
            <header>
                <div className="logo" ><a href="/">DevionX</a></div>
                <nav>
                    <ul className={`navlinks ${isOpen ? 'nav-open' : ''}`}>
                        {
                            navLinks.map((links) => {
                                return <li key={links.id} className={currentPath === links.href ? "active" : ""}>
                                    <a href={links.href}>{links.name}</a>
                                </li>
                            })
                        }
                    </ul>
                </nav>

                <div className="quote-btn">
                    {
                        btnLink.map((btn) => {
                            return <a href={btn.href}>{btn.btnname}</a>
                        })
                    }
                </div>
                
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                </div>
            </header>

        </div>
    )
}

export default Navbar