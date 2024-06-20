import React from 'react'

interface Props{
    children:React.ReactNode;
    show:boolean;
    text:string;
}
const Tip = ({children,show,text}:Props) => {
  return (
    <div style={{position:'relative'}}>
        {show&&<div style={{position:'absolute',top:'45px',left:'-30px',width:'150px',height:'70px',fontSize:'12px'
            ,backgroundColor:'rgba(255,255,255,0.7)',borderRadius:'5px',padding:'3px'}}>
                {text}
            </div>}
        {children}
    </div>
  )
}

export default Tip