import React, { useContext } from 'react'
import DataContext from './DataContext'
import { useParams } from 'react-router-dom'
import '../App.css'

export default function Fruits() {
    const {fruit} = useContext(DataContext)
    const {name} = useParams();
    const fruits = fruit.find((f)=>(
        f.name === name
        ));
  return (
    <div>
        <h2 id='name'>{fruits.name}</h2>
        <div id='pic'>
        <img src={fruits.picture} alt="" />
        </div>
        <p id='detail'>{fruits.detail}</p>
            
    </div>
  )
}
