import React from 'react'
import DarkModeIcon from "./Darkmodeicon";
import { FaClipboardList } from "react-icons/fa";
const Header = () => {
    return (
        <header >
            <p className='listicon'><FaClipboardList /></p>
            <h1 className='headingtext'> To Do lists</h1><DarkModeIcon />

        </header>
    )
}

export default Header
