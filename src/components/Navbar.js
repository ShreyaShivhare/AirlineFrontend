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
                    <NavBtnLink to='/flights'>Flights</NavBtnLink>
                    <NavBtnLink to='/user'>User</NavBtnLink>

                    {/* Booking and payment */}
                    <NavBtnLink to='/passenger'>Passenger</NavBtnLink>
                    <NavBtnLink to='/booking'>TicketBooking</NavBtnLink>
                    <NavBtnLink to='/pdetails'>TicketDetails</NavBtnLink>
                    <NavBtnLink to='/userProfile'>UserProfile</NavBtnLink>
                    <NavBtnLink to='/payment'>Payment</NavBtnLink>

                </NavMenu>
                <NavBtn>
                    {/* <NavBtnLink to='/login'>Login</NavBtnLink> */}
                    <NavBtnLink to='/admin_login'>Admin Login</NavBtnLink>
                    {/* <NavDropdown title="Login" id="nav-dropdown" style={{color:'Black'}}>
                        <NavDropdown.Item href='login_user'>User Login</NavDropdown.Item>
                        <NavDropdown.Item href="admin_login">
                            Admin Login
                        </NavDropdown.Item>
                    </NavDropdown> */}
                    <NavBtnLink to='/register_user'>SignUp</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
}

 

  export default Navbar;