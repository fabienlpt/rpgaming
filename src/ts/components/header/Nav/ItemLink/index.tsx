import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";  

interface IProps {
	link: string;
	title: string;
	onClick?: () => void;
}
const ItemLink: React.FC<IProps> = (props) => {
	return (
		<Container onClick={props.onClick} to={ props.link }>
			{props.title}
		</Container>
	);};
const Container = styled(Link)`
	color: ${({theme})=> theme.colors.text.primary};
	font-size: ${({theme})=> theme.fontSize.title};
	&:hover {
		color: ${({theme})=> theme.colors.text.secondary};
	}
`;
export default ItemLink;