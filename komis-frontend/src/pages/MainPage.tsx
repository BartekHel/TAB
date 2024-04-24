import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar';
import '../css/Navbar.css'

function App() {
  const [count, setCount] = useState(0);
  const x=0;
  return (
    <>
      <Navbar counter={count+45}/>
    </>
    
  )
}

export default App
