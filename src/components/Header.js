import React, { Component } from 'react'
import './header.css';

class Header extends Component {
    
    render() { 
        return (  

           <div> 
             <h1 className="header--title">Netfelix</h1>
           <img className="header--image" src="https://cdn.mos.cms.futurecdn.net/x5PkQ5LG9JNTxh6BizyRbm.png" alt="
           "/>
          
           </div>

        );
    }
}
 
export default Header;