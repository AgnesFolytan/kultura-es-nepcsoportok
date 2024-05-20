import { useState } from 'react'
import './App.css'
import { Layout } from './Oldalak/Layout'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
      <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element= { "alap" } />
            <Route path="culture" element={ "culture" }/>
          </Route>
        </Routes>
    </BrowserRouter>
      </div>
    </>
  )
}

export default App
