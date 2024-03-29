import React, { Component } from 'react';
import { Link } from 'react-router-dom'; //a etiketi yerine Link kullanma sebebimiz HashRouter yerine BrowserRouter kullanmak istersek ilerde sorun yasamamk icin yani hashrouter /# gibi bir etiket ekliyor cunku
import { useTranslation } from 'react-i18next';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import LanguageSelector from '../components/LanguageSelector';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../redux/authActions';

const NavBar = (props) => {

    const { t } = useTranslation();

    const dispatch = useDispatch(); //redux'a action gondermek icin kullanacagimiz dispatch

    const reduxState = useSelector((store) => { //redux store'daki bilgileri cekiyoruz
        return {
            isLoggedIn: store.isLoggedIn,
            mail: store.mail,
            name: store.name,
            password: store.password,
            surname: store.surname
        };
    });
    const { isLoggedIn, mail, name, password, surname } = reduxState;

    let changeableLinks = ( //let block scope ozelligi tasir var ise function scope ozelligi tasir.
        <ul className="navbar-nav ml-auto" >
            <li className="nav-item">
                <Link className="nav-link" to="/login">
                    <span className="mr-1">{t('Login')}</span>
                    <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/signup">
                    <span className="mr-1">{t('Add User')}</span>
                    <FontAwesomeIcon icon={faUserPlus} />
                </Link>
            </li>
        </ul>);

    if (isLoggedIn) {
        changeableLinks = (
            <ul className="navbar-nav ml-auto" >
                <li className="nav-item mt-2">
                    <span className="mr-1">{mail}</span>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/login" onClick={() => { dispatch(logoutSuccess()); }}>
                        <span className="mr-1">{t('Logout')}</span>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </Link>
                </li>
            </ul>);
    }

    return (
        <div className="shadow-sm mb-2">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">MANPORT</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className=" navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">{t('Home')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard">{t('Dashboard')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/management">{t('Management')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/issues">{t('Issues')}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/links">{t('Links')}</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {t('Language')}
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <LanguageSelector></LanguageSelector>
                            </div>
                        </li>
                    </ul>
                    {changeableLinks}

                </div>


            </nav>
        </div>
    );
}
export default NavBar;