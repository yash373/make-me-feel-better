import React from 'react'

const RandomButton = ({handleClick}) => {
  return (
    <button onClick={()=>{handleClick()}} className='mx-auto p-3 rounded-md my-auto bg-orange-300 hover:bg-orange-400'>
      Generate New
    </button>
  )
}

export default RandomButton
