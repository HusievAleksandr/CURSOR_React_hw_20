import React ,{useRef}from 'react';
import { Link } from 'react-router-dom';
import './style/Nav.css'



const Nav = props => {

    const myMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (myMobile.Android() || 
                    myMobile.BlackBerry() || 
                    myMobile.iOS() || 
                    myMobile.Opera() || 
                    myMobile.Windows());
        }
    };
    
    const menuArrow =  useRef();
    const onClickArrow = ()=>{
                menuArrow.parentElement.classList.toggle('_active');
                };

    if( myMobile.any() ) { // это мобильник - делаем что-то
                        document.body.classList.add('_touch');}       
                    else  {document.body.classList.add('_pc');}


    // Меню бургер
    
    
    const menuIkon =  useRef();
    const onClickIkon  = ()=>{
        const iconMenu =document.querySelector('.menu_icon');
        const menuBody =document.querySelector('.menu_body');
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
                            };
   
    

    return (
    <>
    <header className="header">
            <div className="header_container">
            <Link  className="header_logo"to="/"></Link>
                <div className="header_menu menu">
                    <div onClick={onClickIkon } ref={menuIkon}  className="menu_icon">
                        <span></span>
                    </div>
                    <nav className="menu_body">
                        <ul className="menu_list">
                            <li><Link className ="menu_sub-link" to="/">Home </Link></li>
                            <li><Link className ="menu_sub-link" to="/puplications">Puplications</Link></li>
                            <li><Link className ="menu_sub-link" to="/photo">Photo</Link></li>
                            <li><Link className ="menu_sub-link" to="/contacts">Contacts</Link></li>
                            <li>
                                <Link className ="menu_sub-link" to="/">Pages </Link>
                                <span onClick={onClickArrow } ref={menuArrow} className="menu_arrow"></span>
                                <ul className="menu_sub-list">
                                    <li><Link className ="menu_sub-link" to="/">Home </Link></li>
                                    <li><Link className ="menu_sub-link" to="/puplications">Puplications</Link></li>
                                    <li><Link className ="menu_sub-link" to="/photo">Photo</Link></li>
                                    <li><Link className ="menu_sub-link" to="/contacts">Contacts</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header> 
                       
     </>
          
        
    );
};



export default Nav;