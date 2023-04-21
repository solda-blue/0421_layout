import {Routes,Route} from 'react-router-dom'

import Home from './page/Home'
import Story from './page/Story'
import NavHeader from './components/NavHeader'
import Fruits from './page/Fruits'
import { DataProvider } from './page/DataContext'

export default function App() {
  
  return (
    <div>
      <DataProvider>
        <NavHeader/> <hr/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/story/:name' element={<Fruits/>}/>
      </Routes>
      </DataProvider>
    </div>
  )
}
