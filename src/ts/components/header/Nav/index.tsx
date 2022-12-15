import { mediaQueries } from "../../../services/media";
import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

interface IProps {
	isopen: boolean;
    setOpen: (open: boolean) => void;
};

const Nav: React.FC<IProps> = ({isopen, setOpen}) => {
	return (
		<Container isopen={isopen} setOpen={setOpen}>
			<Navbar setOpen={setOpen} />
		</Container>
	);
};

const Container = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    background-color: ${({theme})=> theme.colors.layout.body};
    transform: ${({ isopen }) => isopen ? "translateY(0)" : "translateY(-200%)"};
    transition: transform 0.3s ease-in-out;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    ${mediaQueries("desktop")`
        z-index: 1;
        transform: none;
        transition: none;
        position: static;
        background-color: transparent;
        width: 100%;
        height: 100%;
        flex-flow: row nowrap;
        justify-content: space-between;
	`}
`;
export default Nav;
