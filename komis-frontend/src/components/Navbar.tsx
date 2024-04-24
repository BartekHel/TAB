import React, { useEffect, useState } from 'react'


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
    <div style={{width:'500px',height:'400px',backgroundColor:'red'}}>Navbar {counter}</div>
  )
}

export default Navbar