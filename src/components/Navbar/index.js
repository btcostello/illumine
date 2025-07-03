import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import logodark from '../../assets/images/logodark.svg'
import {Auth} from 'aws-amplify';


  
function Navbar() {


  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/' >
          <img className="logo" alt="illumine" src={logodark}/>
          </NavLink>
          <NavLink to='/calculator' >
            Calculator
           </NavLink>
          <NavLink to='/tutorial' >
            How It Works
           </NavLink>
          <NavLink to='/why' >
            Why Illumine
          </NavLink>
          {/*<NavLink to='/pricing' >
            Pricing
          </NavLink>
          <NavLink to='/tutorial' >
            Tutorial
          </NavLink>
          <NavLink to='/insights' activeStyle>
            Insights
          </NavLink>

*/}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Account</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;