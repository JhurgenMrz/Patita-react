 import React from 'react'
 import { connect } from 'react-redux'
 import {setUser} from '../actions/index'
 import Form from '../components/Form'
 
const Dashboard =  props =>(
    <div className="Dashboard">
        <div className="Dashboar-container">
            <div className="Dashboard-content">

                <div className="Dashboard-form">
                    <Form/>
                </div>

                <div className="Dashboard-profile">
                    <h2>Perfil</h2>
                    <div className="Dashboard-profile-info">
                        <img src={props.user.photoURL} alt={props.user.displayName}/>
                        <span>Nombre:</span>
                        <h4>{props.user.displayName}</h4>
                        <span>Correo:</span>
                        <h4>{props.user.email}</h4>
                        <button>Cerrar Sesión</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = {
    setUser,
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);