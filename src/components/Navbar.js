import React, {useEffect, useState} from 'react'
import {Link, useLocation} from 'react-router-dom';
import '../styles/Navbar.css'
import ReorderIcon from "@material-ui/icons/Reorder";
/*import drewLogo  from '../drewslogo.png';*/

function Navbar() {
    const [expandedNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();
    useEffect(()=>setExpandNavbar(false), [location]);
  return (
    <div className='navbar' id={expandedNavbar ? "open" : "closed"}>
        <div className='toggleButton'>
            <button onClick={()=>{setExpandNavbar((prev)=>!prev)}}>
                <ReorderIcon />
            </button>
        </div>

        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Experience</Link>
        </div>
    </div>
  )
}

export default Navbar