import React from 'react';
import './nav.css';
import { Link} from 'react-router-dom';

const Nav = () => {
    return (
      // need to add links FIX 
    
       <nav>
          <ul>
            <Link to="/" ><img className="nav--logo" src="https://cdn.vox-cdn.com/thumbor/GS5aVofpjj3xAZmMMp2hBuYGmpE=/0x133:3151x1905/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="logo"/></Link>
             <li><Link to="/" >Home</Link></li>
             <li><Link to="/movies/new" >Add MOVIE</Link></li>
          </ul>
      </nav>
      
      );
}
 
export default Nav;