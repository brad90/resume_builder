import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ResumeCardContainer = styled.div`
	background: pink;
	padding: 1rem;
	height: 100%;
	margin: 1rem;

	&:hover {
		cursor: pointer;
	}
`;

const ResumeCardDescription = styled.div``;

const ResumeCard = ({ resumeimg, id, description }) => {
	return (
		<Link to="/resume/edit/name">
			<ResumeCardContainer id={id}>
				<img />
				<ResumeCardDescription>{description}</ResumeCardDescription>
			</ResumeCardContainer>
		</Link>
	);
};

ResumeCard.defaultProps = {
	resumeimg: "",
	id: "",
	description: "missing",
};

export default ResumeCard;
