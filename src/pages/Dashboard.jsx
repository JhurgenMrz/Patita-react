 import React from 'react'
 import { connect } from 'react-redux'
import {auth} from '../utils/firebase'
import {setUser, setLogin} from '../actions/index'
 import Form from '../components/Form'
 
const Dashboard =  props =>{
    
    const logoutFacebook = ()=>{
        auth().signOut()
            .then(()=>{
                console.log(`Cerró sesión`);
                props.setUser({}),
                props.setLogin(false)
                props.history.push('/')
            })
    }
    
    return(
    <div className="Dashboard">
        <div className="Dashboar-container">
            <div className="Dashboard-content">
                <div className="Dashboard-form">
                    <Form/>
                </div>
                <div className="Dashboard-profile">
                    <h2>Perfil</h2>
                    <div className="Dashboard-profile-info">
                        <div>
                        <img src={props.user.photoURL} alt={props.user.displayName}/><br/>
                        <span>Nombre:</span>
                        <h4>{props.user.displayName}</h4>
                        <span>Correo:</span>
                        <h4>{props.user.email}</h4>
                        </div>
                        <button onClick={logoutFacebook}>Cerrar Sesión</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};

const mapDispatchToProps = {
    setUser,
    setLogin
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);