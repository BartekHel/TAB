import React, { useEffect, useState } from 'react'
import '../css/Navbar.css'

interface Props{
    counter:number;
}
const Navbar = ({counter}:Props) => {

    const [cos, setCos] = useState(0);

    useEffect(() => {
        console.log('cos')
        setCos(1)
    }, [counter]);

  return (
    <div className='navbar'>Navbar {counter}</div>
  )
}

export default Navbar