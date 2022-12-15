import { mediaQueries } from "../../../../services/media";
import React from "react";
import styled from "styled-components";
import ItemLink from "../ItemLink";

interface IProps {
    setOpen: (open: boolean) => void;
};

const Navbar: React.FC<IProps> = ({setOpen}) => {
	return (
		<Container>
			<Ul>
				<ListItem  className="nav-link">
					<ItemLink onClick={() => setOpen(false)} link="/" title="Accueil"/>
				</ListItem>
				<Barre/>
				<ListItem className="nav-link">
					<ItemLink onClick={() => setOpen(false)} link="/agenda" title="Agenda"/>
				</ListItem>
				<Barre/>
				<ListItem className="nav-link">
					<ItemLink onClick={() => setOpen(false)} link="/favoris" title="Favoris"/>
				</ListItem>
				<Barre/>
				<ListItem className="nav-link">
					<A href="https://www.eventbrite.fr" target="_blank" rel="noopener noreferrer">Réservation</A>
				</ListItem>
				<Barre/>
			</Ul>
		</Container>
	);
};

const Container = styled.div`
	width: 70%;
	height: 60%;
	display: flex;
`;

const Ul = styled.ul`
	display: flex;
	flex: 1;
	flex-flow: column nowrap;
	justify-content: center;
    top: 0;
	${mediaQueries("desktop")`
		width: 100%;
		flex-flow: row nowrap;
		justify-content: space-around;
		list-style: none;
		margin-top: 0;
		margin-left: 20px;
		position: static;
		align-items: center;
	`}
`;

const ListItem = styled.li`
	display: block;
	padding-left: 20px;
	margin : 50px 0 10px 0;
	${mediaQueries("desktop")`
		width: 120px;
		height: 60px;
		display: flex;
		align-items: center;
		justify-content: center;
	`}

	a {	
		text-decoration: none;
		font-family: 'enchanted' !important;
	}
`;

const A = styled.a`
	color: #0F0F0F;
	font-size: 32px;
`;

const Barre = styled.div`
	width: 100%;
	height: 1px;
	background-color: #0F0F0F;
	${mediaQueries("desktop")`
		display: none;
	`}
`;

export default Navbar;