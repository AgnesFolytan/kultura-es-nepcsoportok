import { useState } from 'react'
import './App.css'
import { Layout } from './Oldalak/Layout'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Culture from './Oldalak/Culture'
import { Alap } from './Oldalak/Alap'

function App() {
  

  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            <Route index element= { <Alap /> } />
            <Route path="kultura" element={ <Culture /> }/>
          </Route>
        </Routes>
    </BrowserRouter>
      </div>
    </>
  )
}

export default App;
