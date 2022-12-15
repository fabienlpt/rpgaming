import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { mediaQueries } from "../../services/media";
import Burger from './Burger';

const NavBar: React.FC = () => {
    return (
        <Container>
            <Link 
                to="/"
                className='logo'
                title='Home Page'
            >
                <img src="logo512.png" alt="logo" width="50" height="50"/>
            </Link>
            <Burger/>
        </Container>);
    };
const Container = styled.div`
    width: 100%;
  	height: 60px;
  	padding: 0px 20px 0 10px;
	background-color: ${({theme})=> theme.colors.layout.body};
	display: flex;
	flex-direction: row;
	align-items: center;
	width: auto;
	z-index: 1;
	.logo {
    	padding: 15px 0;
  	}
`;
export default NavBar;