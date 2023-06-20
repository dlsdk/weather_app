import React from 'react'
import style from "./Searcbbar.module.css"
import { useDispatch } from 'react-redux'
import Actions from '../redux/actions';
import { useSelector } from 'react-redux';
import utils from './utils/utils';



export default function Searchbar() {
const {SET_QUERY,SET_WHEATHER} = Actions.wheateractions;
const dispatch = useDispatch();

const {query} = useSelector(state => state.WheaterReducers);
const {api} = utils;


const searchwheather= (e) => {
    if (e.key === "Enter")
    {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(res => {
            dispatch(SET_WHEATHER(res));
            dispatch(SET_QUERY(""));
        }).catch(console.log("error"))
    }
}
  return (
    <div>
      <input type='text' onChange={e => dispatch(SET_QUERY(e.target.value))} onKeyPress={searchwheather} className={`${style.searchbar}`} value={query} placeholder='Search...'/>
    </div>
  )
}
