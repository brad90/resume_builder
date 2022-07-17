import React from "react";
import styled from "@emotion/styled";
import { Theme as theme } from "../../theme";

const ButtonStyle = styled.button`
	border-radius: 5rem;
	padding: 1rem 2rem;
	color: white;
	background: pink;
	&:hover {
		cursor: pointer;
	}
`;

const Button = ({ text }) => {
	return <ButtonStyle>{text}</ButtonStyle>;
};

export default Button;
