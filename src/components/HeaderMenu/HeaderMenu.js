import React from 'react';
import styled from 'styled-components';

const HeaderMenu = function () {
  return (
    <Header>
      {/* <h1 class="logo"><a href="#">Flexbox</a></h1> */}
      <MainNav>
        <Button><Link href="#">Contact Us</Link></Button>
        <DropDown><Link href="#" aria-haspopup="true">Account</Link>
          <SubMenu aria-label="submenu">
            <Button><Link href="#">Login</Link></Button>
            <Button><Link href="#">User Registration</Link></Button>
            <Button><Link href="#">Manage Subscriptions</Link></Button>
          </SubMenu>
        </DropDown>
        <Button><Link href="#">Notifications</Link></Button>
        <Button><Link href="#">Contact</Link></Button>
      </MainNav>
    </Header>

  );
}
export default HeaderMenu;

export const Header = styled.header`
	padding-top: .5em;
	background-color: #f4f4f4;
	border-radius: 5px;
	@media (min-width: 769px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 1025px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const MainNav = styled.ul`
	margin-top: 5px;
	margin-left:auto;
  list-style: none;
	a {
		padding: 10px 15px;
		/* text-transform: uppercase; */
		text-align: center;
		display: block;
		color: #34495e;
		font-size: .99em;
	}
	a:hover {
		/* color: #718daa; */
		color:tomato;
		text-decoration:none;
	}
	@media (min-width: 769px) { 
		display: flex;
	}
`;

const Link = styled.a`
	color: #34495e;
	text-decoration: none;
`;

const Button = styled.li`
	&:hover,
	&:focus-within {
		/* background: red; */
		cursor: pointer;
	}
`;

const SubMenu = styled.ul`
	/* background: orange; */
	visibility: hidden;
	background: whitesmoke;
  opacity: 0;
	padding-left:0px; 
  /* min-width: 5rem; */
	/* position: absolute; */
  transition: all 0.5s ease;
  display: none;
	list-style: none;
	a {
		padding: 10px 15px;
		/* text-transform: uppercase; */
		text-align: left;
		display: block;
		color: #34495e;
		font-size: .95em;
	}
	a:hover {
		/* color: #718daa; */
		color:tomato;
	}
	@media (min-width: 769px) {
		position: relative;
	}
	@media (min-width: 1025px) {
		position: absolute;
	}
`;

const DropDown = styled.li`
	&:hover ${SubMenu},
	&:focus-within ${SubMenu} {
	 visibility: visible;
   opacity: 1;
   display: block;
	}
`;




