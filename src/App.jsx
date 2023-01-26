import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Quote from './Components/Quote';



function App() {
  const [ user, setUser ] = useState(); 
 
/*Ejemplo de peticion asincrono
  const getRandomUser = async () => {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data)
  }*/

  /*Ejemplo con then y catch
    const getRandomUser = () => {
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
  }*/

  /*Ejemplo con axios*/
  const getRandomUser = () => {
    axios.get('https://randomuser.me/api/')
    .then( res => setUser(res.data.results[0]))
    .catch( error => console.log(error))
  }

  useEffect( () => {
    getRandomUser();
  }, [])
  
  return (
    <div className="App">
      {user ? <Quote 
        user={user}
        getRandomUser={getRandomUser}
      /> : <h1>CARGANDO...</h1> }
      
    </div>
  )
}

export default App
