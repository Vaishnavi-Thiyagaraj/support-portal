import React from 'react';
import styled from 'styled-components';
// const FooterItems = [['Request a Quote','How to Buy','Feedback','Contact Us'],
// ['Careers', 'Image Library', 'Private Policy'],
// ['Legal Notice', 'Insight', 'Sight Maps']]
const FooterItems = ['Private Policy', '© 1999 - 2018 Juniper Networks, Inc.All rights reserved', 'Legal Notice'];

const HeaderMenu = function () {
  return (
    <div>
      <Header>
        <MainNav>
          <Button><Link href="#">Services</Link></Button>
          <Button><Link href="#">About Juniper</Link></Button>
          <Button><Link href="#">Partners</Link></Button>
          <Button><Link href="#">Community</Link></Button>
        </MainNav>
      </Header>
      <FooterContainer>
      {FooterItems.map((items) => {
           return <FooterItem>{items}</FooterItem>
        
      })}
      </FooterContainer>

    </div>
  );
}
export default HeaderMenu;

export const Header = styled.header`
	padding-top: .5em;
	background-color: #343a40!important;
	border-radius: 5px;
	@media (min-width: 769px) {
		display: flex;
		flex-direction: column;
		align-items: center;
    justify-content: center;
	}
	@media (min-width: 1025px) {
		flex-direction: row;
		justify-content: center;
	}
`;

const MainNav = styled.ul`
	margin-top: 5px;
	/* margin-left:auto; */
  list-style: none;
	a {
		padding: 10px 15px;
		/* text-transform: uppercase; */
		text-align: center;
		display: block;
		color: rgba(255,255,255,.5);
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
	color: rgba(255,255,255,.5);
	text-decoration: none;
`;

const Button = styled.li`
	&:hover,
	&:focus-within {
		cursor: pointer;
	}
`;

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterItem = styled.div`
  flex: 1 0 18%;
  margin: 5px;
  background: tomato;
  min-height: 50px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
`;

const FooterLinks = styled.div`
  display: block;
`;







