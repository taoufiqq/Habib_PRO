import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import { FiAlignJustify } from "react-icons/fi";
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
   <nav>
    <div className="container nav__container">
     <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
        <img src={Logo} alt="Nav Logo" />
     </Link>
     <ul className={`nav__links ${isNavShowing ? 'show__Nav' : 'hide__Nav'}`}>
        {
            links.map(({name, path},index)=>{
                return (
                    <li key={index}>
                        <NavLink to={path} className={({isActive})=> isActive ? 'active-nav' : 
                        ''} onClick={()=> setIsNavShowing(prev => !prev)}>{name}</NavLink>
                    </li>
                )
            })
        }
     </ul>
     <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(prev => !prev)}>
        {
            isNavShowing ? <MdOutlineClose/> : <FiAlignJustify />
        }
     </button>
    </div>
   </nav>
  )
}

export default Navbar