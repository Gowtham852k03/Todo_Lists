import React from 'react'
import DarkModeIcon from "./Darkmodeicon";
import { TiWeatherPartlySunny } from "react-icons/ti";
const Header = () => {
    return (
        <header >
            <p className='searchicon'><TiWeatherPartlySunny /></p>
            <h1 className='headingtext'> WEATHER APP</h1>
            <DarkModeIcon className="mode" />

        </header>
    )
}

export default Header
