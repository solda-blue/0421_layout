import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function NavHeader() {
  return (
    <div id='nav'>
        <Link to='/'>Home</Link>
        <Link to='/story'>Story</Link>
    </div>
  )
}
