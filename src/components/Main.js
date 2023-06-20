import React from 'react'
import style from "./Main.module.css"
import utils from './utils/utils';
import { useSelector } from 'react-redux';



export default function Main() 
{
    const {days,months} = utils;
    const {weather} = useSelector(state => state.WheaterReducers);
    console.log("WEATHER : ", weather);

    const dateupdate = (e) => {
        let day = days[e.getDay()];
        let month = months[e.getMonth()];
        let date = e.getDate();
        let year = e.getFullYear(); 
        
        return (`${day} ${month} ${date} ${year}`)
    }
  return (
    <> {weather.name ? <> <div className={`container ${style.locationcontainer}`}>
        <div className={style.location}>{weather.name}</div>
        <div className={style.date}>{dateupdate(new Date())}</div>
    </div>
    <div className={`container ${style.wheathercontainer}`}>
        <div className={style.temp}>{Math.round(weather.main.temp)}°C</div>
        <div className={style.wheather}>{weather.weather[0].main}</div>
        </div></> 
        : 
        <div className={`container ${style.error}`}>Geçerli Lokasyon Giriniz</div>}  
    </>
 
  )
}
