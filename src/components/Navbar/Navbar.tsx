import React, {useState} from 'react'
import { 
        Nav,
        NavbarContainer,
        NavLogo,
        NavIcon,
        MobileIcon,
        NavMenu,
        NavItem,
        NavLink
} from './Navbar.elements';
import {
        FaTimes,
        FaBars
} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

export const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
    <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon />
                        Artur Porowski
                    </NavLogo>
                </NavbarContainer>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLink to='/'>About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/Skills'>Skills</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/Academics'>Academics</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/Projects'>Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/Contact'>Contact</NavLink>
                    </NavItem>
                </NavMenu>
            </Nav>
        </IconContext.Provider>
    </>
    );
}

export default Navbar