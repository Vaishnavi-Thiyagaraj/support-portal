import styled from 'styled-components';

// export const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   @media (max-width: 640px) {
//     display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
//     flex-direction: column;
//   }
// `;

// export const Header = styled.div`
//   display: flex;
//   @media (max-width: 640px) {
//     flex-direction: column;
//   }
// `;

// export const Image = styled.img`
//   width: 200px;
//   margin-right: 1rem;
//   border-radius: 2px;
// `;

// export const ViewResumeLink = styled.a`
//   display: flex;
//   text-decoration: none;
//   padding: 0.75rem 1.5rem;
//   font-weight: bold;
//   align-items: center;
//   margin-top: 1rem;
//   border: 2px solid #2ecc40;
//   background-color: rgba(46, 204, 64, 0.3);
//   transition: background-color 250ms ease;
//   &:hover {
//     background-color: #2ecc40;
//   }
//   svg {
//     fill: white;
//     margin-left: 8px;
//   }
// `;



export const Header = styled.header`
	padding-top: .5em;
	padding-bottom: .5em;
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

export const MainNav = styled.ul`
	margin-top: 5px;
	a {
		padding: 10px 15px;
		text-transform: uppercase;
		text-align: center;
		display: block;
		color: #34495e;
		font-size: .99em;
	}
	a:hover {
		color: #718daa;
	}
	@media (min-width: 769px) { 
		display: flex;
	}
`;

export const Link = styled.a`
	color: #34495e;
	text-decoration: none;
`;

export const Button = styled.li`
	&:hover,
	&:focus-within {
		background: red;
		cursor: pointer;
	}
`;

export const SubMenu = styled.ul`
	background: orange;
	visibility: hidden;
  opacity: 0;
  min-width: 5rem;
	position: absolute;
  transition: all 0.5s ease;
  display: none;
`;

export const DropDown = styled.li`
	&:hover,
	&:focus-within {
	 visibility: visible;
   opacity: 1;
   display: block;
	}
`;

