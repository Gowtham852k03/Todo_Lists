import React from 'react';
import humidity_icon from './images/humidity.png';
import wind_icon from './images/wind.png';
import { MdSunny } from "react-icons/md";
import { PiMoonStarsFill } from "react-icons/pi";


const Footer = ({ humidity, windSpeed, isDay }) => {
    return (
        <footer>
            <div className='footer-content'>
                <div className='bottomname'>
                    <div className='col img-left'>
                        <img src={humidity_icon} alt="humidity" />
                        <div>
                            <p className='Humidity-percent'>{humidity ? humidity + '%' : '50%'}</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div className='col img-right'>
                        <img src={wind_icon} alt="wind" />
                        <div>
                            <p className='windspeed'>{windSpeed ? windSpeed + ' Km/h' : '15 Km/h'}</p>
                            <p>windspeed  </p>
                        </div>
                    </div>
                    <div className='daynight'>
                        <div className='dnicon'>{isDay ? <MdSunny className='sun' /> : <PiMoonStarsFill className='moon' />}</div>
                        {isDay ? "Day" : "Night"}

                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;