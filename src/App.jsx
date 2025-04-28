import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Section from './components/Section/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Section></Section>
    </>
  )
}

export default App
