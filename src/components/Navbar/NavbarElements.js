import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
height: 85px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1050px) / 2);
z-index: 12;
border-bottom: solid;
border-width: 1px;
border-color: rgb(30, 75, 117,.25)
/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
margin-right: 40px;
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-family: 'Poppins', sans-serif;
font-size: 1.0rem;
/*&.active {
	border-bottom: solid rgb(30, 75, 117);
}*/
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
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
background: #cccccc;
padding: 10px 22px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
