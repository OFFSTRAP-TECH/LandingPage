import { useState } from 'react'
import NavBarComp from "./assets/Components/NavBarComp"
import './App.css'
import Slide from './assets/Components/Slide'
import { Analytics } from "@vercel/analytics/react"
function App() {
  

  return (
    <>
  <NavBarComp />
  <Slide />
    </>
  )
}

export default App
