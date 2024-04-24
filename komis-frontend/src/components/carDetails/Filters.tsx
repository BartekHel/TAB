import React from 'react'

const Filters = () => {
  return (
    <div className='filters'>
      <div className='filter'>
        <label>Brand</label>
        <input type='text' />
      </div>
      <div className='filter'>
        <label>Model</label>
        <input type='text' />
      </div>
      <div className='filter'>
        <label>Year</label>
        <input type='number' />
      </div>
      <div className='filter'>
        <label>Price</label>
        <input type='text' />
      </div>
      <div className='filter'>
        <label>Color</label>
        <input type='text' />
      </div>
      <div className='filter'>
      <button>Search</button>
      </div>
    
    </div>
  )
}

export default Filters