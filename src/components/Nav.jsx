import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

const Nav = props => {

    const [active,setActive] = useState("");

    const handleMenu = (e)=>{
        if(active == "is-active animated lightSpeedIn"){
            return setActive("")
        }else{
            return setActive("is-active animated lightSpeedIn");
        }
    }


return(
    <div className="Nav">
        <img className="animated jackInTheBox 1s" onClick={handleMenu} id="menu-icon" src="https://res.cloudinary.com/jmaraza-com/image/upload/v1562893486/cecmdzmkxmoixqywlp5l.svg" alt=""/>
        
        <div className={`Nav-container ${active}  animated `} id="menu-burger">
        <ul>
            <li>
                <Link onClick={handleMenu} to="/">Inicio</Link>
            </li>
            <li onClick={handleMenu}>
                <a  onClick={props.showModal}> Dar en Adopción</a>
            </li>
            <li>
                {props.login ?
                <Link onClick={handleMenu} to="/panel">Mi Cuenta</Link>
                :
                <Link onClick={handleMenu} to="/login"> Iniciar Sesión</Link>
                }
            </li>
        </ul>
        </div>
        
    </div>
)};

const mapStateToProps = state =>{
    return {
        login: state.login,
    };
};

export default connect(mapStateToProps)(Nav)