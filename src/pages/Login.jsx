import React from 'react'
import {auth, provider} from '../utils/firebase'

const Login =( props ) => {

    const loginFacebook =()=>{
        auth().signInWithPopup(provider)
            .then(({user}) => {
                // console.log(user)
                props.history.push('/panel')
            });
    }

    const logoutFacebook = ()=>{
        auth().signOut()
            .then(()=>{
                // console.log(`Cerrar sesión`);
                props.history.push('/')
            })
    }

    return (
        <div className="Login">
        <div className="Login-container">
        <div className="Login-content">
            <h2>Crear cuenta o Iniciar Sesión</h2>
            <button onClick={loginFacebook}>
                <i className="fab fa-facebook-square" />
                <span>Iniciar sesión con facebook</span>
            </button>
            <button onClick={logoutFacebook}>
                Cerrar Sesión
            </button>
        </div>
        </div>
    </div>
)}

export default Login;