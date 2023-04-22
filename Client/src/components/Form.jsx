
import React, {useState} from "react";
import Estilos from './Form.module.css'
import validation from "./validation";
    
    const Form = ({ login }) => {
    const [userData, setUserData] = useState({ 
        username: '', 
        password: '' 
    });

    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }));

        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        login(userData);
    }

    return(
    
       <form className={Estilos.container}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwLZZgVKrea2AXablugeb82qKp9K3QrBbZt9d5uPaGg&s" alt="not found" className={Estilos.idImg}/>
    
        <label> Username:</label>
        <input 
        type="text"
        placeholder="username"
        name="username"
        value={userData.username}
        onChange={handleInputChange}
        className={Estilos.idInput}
        />
        {errors.e1 ? (
            <p className={Estilos.idP}>{errors.e1}</p>
        ) : errors.e2 ? (
                <p className={Estilos.idP}>{errors.e2}</p>
        ) :(
            <p className={Estilos.idP}>{errors.e3}</p>
        )}
        <br />

        <label>Password:</label>
        <input 
        type="password" 
        placeholder="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
        className={Estilos.idInput} 
        />
        {errors.p1 ? (
                <p className={Estilos.idP}>{errors.p1}</p>
        ) : (
            <p className={Estilos.idP}>{errors.p2}</p>
        )}
        <br />
   
        <button className={Estilos.login} type="submit" onClick={handleSubmit}>LOGIN</button>

       </form>
     
    )
    }

    export default Form;