import React from 'react'
import Button from './Button'

const Quote = ({user, getRandomUser}) => {
  return (
    <article className='quoteBox__article'>
        <h1 className='quoteBox__title'><b>Nombre:</b>{user?.name.title} {user?.name.first} {user?.name.last}</h1>
        <div className='quoteBox__img'><img src={user?.picture.large} alt="" /></div>
        <ul>
            <li><b>Telefono:</b> {user?.phone}</li>
            <li><b>Email:</b>{user?.email}</li>
            <li><b>Ciudad:</b>{user?.location.city}</li>
            <li><b>Estado:</b>{user?.location.state}</li>
            <li><b>Pais:</b>{user?.location.country}</li>
        </ul>
    <Button
    className = 'buttonBox__icon'
        getRandomUser={getRandomUser}
     />
    </article>
  )
}

export default Quote