import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Nav from '../components/Nav'
import Modal from './Modal'
import Form from '../components/Form'
import Login from '../pages/Login'


const Header = (props) => {

    const [modal,setModal] = useState(false);

    const showModal = ()=>{
        setModal(!modal);
    }

    return (
    <div className="Header">
        <div className="Header-container">
            <div className="Header-content">
                <div className="Header-logo">
                    <Link to="/">
                    <img  src="https://res.cloudinary.com/jmaraza-com/image/upload/v1562809817/wwtvartpmpgok1qctjzg.svg" alt="Patitas" />
                    </Link>
                    <Link to="/">
                    <h1>Patitas</h1>
                    </Link>
                </div>
                <div className="Header-nav">
                    <Nav showModal={showModal}/>
                </div>
            </div>

        </div>

        <Modal 
        show={modal}
        close={showModal}
        >
            {props.login ?
            <Form />
            :
            <div className="Modal-login">
                <div>
                <Login/>
                </div>
            </div>
            }   
        </Modal>

    </div>
)};

const mapStateToProps = state => {
    return {
        login: state.login,
    };
}

export default connect(mapStateToProps)(Header);