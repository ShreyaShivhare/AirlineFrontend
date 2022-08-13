import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
 
export const Nav = styled.nav`
background: black;
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((80vw - 1000px) / 2);
z-index: 12;
font-size : 15px;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;
 
export const NavLink = styled(Link)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
    color: orange;
    &:hover {
        
        background:white;
        color:orange;
        
}
`;


 
export const Bars = styled(FaBars)`
display: none;
color: grey;
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
}
`;
 
export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: 24px; //-24
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
    display: none;
    color:white;
}
`;
 
export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
    display: none;
}
`;
 
export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: black;
padding: 10px 22px;
color: white;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */

&:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: orange;
}
`;

