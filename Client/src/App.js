// import characters from './data.js'
// import Estilos from './components/Cards.module.css'
// import Estilos from './components/Nav.module.css'
import './App.css'
import { useState, useEffect } from 'react'
import Cards from './components/Cards.jsx'
import Nav from '../src/components/Nav.jsx'
import About from './components/About'
import Detail from './components/Detail'
import Form from './components/Form'
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Favorites from './components/Favorites/Favorites.jsx'
import axios from 'axios'


function App () {
  const username = 'email@email.com';
  const password = 'notengo22';
  const navigate = useNavigate();
  const location = useLocation();
  const [characters, setCharacter] = useState([]);
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate('/');
  }, [access])

//   function login(userData) {
//     const { username: email, password } = userData;
//     const URL = 'http://localhost:3001/rickandmorty/login/';
//     axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
//        const { access } = data;
//        setAccess(data);
//        access && navigate('/home');
//     });
//  }

      const login = async (userData) => {
        try {
          const { username: email, password } = userData;
          const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(`${URL}?email=${email}&password=${password}`)
         const { access } = data;
                    setAccess(data);
                    access && navigate('/home');
        } catch (error) {
          alert(error.message)
        }
      }
  
 //----------------------------------------------------------------------------------
  // function login(userData){
  //   if(userData.email === email && userData.password === password){
  //     setAccess(true);
  //     navigate('/home');
  //   }
  // };

  function logout(){
    setAccess(false)
    navigate('/')
  }

  const onSearch = async (id) => {
    try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      const char = characters.find((char)=> char.id === id)
      if(id){
        if(char)return alert("personaje ya existente");
        setCharacter([...characters, data])
      }
    } catch (error) {
      alert("Algo salio mal " + error.message)
    }
  }

  // const onSearch = (id) =>{
  // fetch(`http://localhost:3001/rickandmorty/character/${id}`)
  //   .then((res)=> res.json())
  //   .then((data)=>{
  //     data.name 
  //              ? setCharacter ([...characters, data])
  //              :alert ("Carta inexistente!!")
  //   })
  //   .catch((error)=> console.log(error))
  // }

  const onClose = (id) => {
    const filtro = characters.filter((char) =>char.id !== Number (id))
    setCharacter(filtro)
  }


  //App renderiza a Nav y Cards en el navegador
  return (
    <div className='App' >
      {location.pathname !== '/' && <Nav onSearch={onSearch} logout={logout}/>}
      <Routes>
        <Route path='/' 
        element={<Form login={login}/>}
        />
        <Route path='/home' 
        element={<Cards characters={characters} onClose={onClose}/>}
        />
        <Route 
        path='/about' 
        element={<About/>}
        />
        <Route
          path='/favorites'
          element={<Favorites/>}
        />
        <Route 
        path='/detail/:detailId' 
        element={<Detail/>}
        />
          <Route
        path='*'
        element={<Error/>}
        />

      </Routes>
    </div>
  )
}

export default App






{/* <Link to='/home'> <button className={styles.button}>Back to home!</button> </Link> */}