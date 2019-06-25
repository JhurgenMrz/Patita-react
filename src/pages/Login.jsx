import React from 'react'
import {auth, provider} from '../utils/firebase'

const Login =( props ) => {

    const LoginFacebook =()=>{
        auth().signInWithPopup(provider)
            .then(({user}) => {
                console.log(user)
            })
    }

    return (
        <div className="Login">
        <div className="Login-container">
        <div className="Login-content">
            <h2>Crear cuenta o Iniciar Sesión</h2>
            <button >
                <i className="fab fa-facebook-square" />
                <span>Iniciar sesión con facebook</span>
            </button>
        </div>
        </div>
    </div>
)}

export default Login;