import React from 'react'

const Button = ({getRandomUser}) => {
  return (
    <button onClick={getRandomUser} className='buttonBox__icon'>New User</button>
  )
}

export default Button