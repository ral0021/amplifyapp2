import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/consumption_history">Consumption History</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/pill_information">Pill Setup</NavLink>
       </div>
    );
}
 
export default Navigation;