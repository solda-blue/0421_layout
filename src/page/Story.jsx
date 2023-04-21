import '../App.css'
import React, { useContext } from 'react'
import { Link,Route } from 'react-router-dom'
import DataContext from './DataContext'
import Fruits from './Fruits'


export default function Story() {
    const {fruit} = useContext(DataContext)

    return (
        <div>
        <h2 id='title'>StoryList</h2>
        <ul id='fruits'>
        {fruit.map(({ name }) => (
          <li key={name}>
            <Link to={`/story/${name}`}>{name}Story</Link>
          </li>
        ))}
      </ul>
    </div>
)
}



