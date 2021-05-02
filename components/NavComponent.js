import {Nav, Navbar} from "react-bootstrap";
import {useRef, useState} from "react";
import {faBars, faCoffee, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavComponent=()=>{
    const navButton=useRef(null);
    const[open,setOpen]=useState(false);
    const handleClick=()=>{
        setOpen(!open);
    }
    return(
        <>

            <button className="btn btn-lg" id={"nav-button"} ref={navButton} onClick={handleClick} >{open ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/> }</button>
            <nav id={open ? "sidebar-wrapper-open":"sidebar-wrapper-closed"}>
                <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                        <a className="js-scroll-trigger" href="#page-top">Start Bootstrap</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#page-top">Home</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#about">About</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#services">Services</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="sidebar-nav-item">
                        <a className="js-scroll-trigger" href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>

        </>
    );
}
export default  NavComponent;