import React, { useState } from 'react';

interface Props{
  color: string,
   engine: string;
    upholstery: string;
    colorChange:(color:string)=>void;
    engineChange:(color:string)=>void;
    upholsteryChange:(color:string)=>void;
}

function Filters({color,engine,upholstery,colorChange,engineChange,upholsteryChange}: Props) {
  


  return (
    <div className='filters'>
      <div className='filter'>
        <label>Color</label>
        <select value={color} onChange={(e)=>colorChange(e.target.value)}>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="black">black</option>
        </select>
      </div>
      <div className='filter'>
        <label>Engine</label>
        <select value={engine} onChange={(e)=>engineChange(e.target.value)}>
          <option value="diesel 2.0L BlueHDi">diesel 2.0L BlueHDi</option>
          <option value="diesel 1.6L TDI">diesel 1.6L TDI</option>
          <option value="petrol 1.6">petrol 1.6</option>
          <option value="petrol 2.0L turbocharged">petrol 2.0L turbocharged</option>
        </select>
      </div>
      <div className='filter'>
        <label>Upholstery</label>
        <select value={upholstery} onChange={(e)=>upholsteryChange(e.target.value)}>
          <option value="leather">Premium Leather upholstery</option>
          <option value="fabric">Fabric upholstery</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
