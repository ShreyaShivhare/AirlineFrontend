import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from './NavbarElements';
  import NavDropdown from 'react-bootstrap/NavDropdown';
 


  function Navbar() {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavBtnLink to='/'>Home</NavBtnLink>
                    <NavBtnLink to='/about'>About us</NavBtnLink>
                    <NavBtnLink to='/admin'>Admin</NavBtnLink>
                    <NavLink to='/user'>User</NavLink>

                </NavMenu>
                <NavBtn>
                    {/* <NavBtnLink to='/login'>Login</NavBtnLink> */}
                    <NavDropdown title="Login" id="nav-dropdown" style={{color:'white'}}>
                        <NavDropdown.Item href='login'>User Login</NavDropdown.Item>
                        <NavDropdown.Item href="adlogin">
                            Admin Login
                        </NavDropdown.Item>
                    </NavDropdown>
                    <NavBtnLink to='/signup'>SignUp</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}

 

  export default Navbar;