import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const NavContainer = styled.div`
	width: full;
	display: flex;
	padding: 1rem 12rem;
	justify-content: space-between;
`;

const NavMenu = styled.ul`
	display: inline;
`;

const NavBar = () => {
	return (
		<NavContainer>
			<Link to="/">
				<h1>Resume</h1>
			</Link>
			<NavMenu>
				<li>Meh</li>
				<li>Meh</li>
			</NavMenu>
		</NavContainer>
	);
};

export default NavBar;
