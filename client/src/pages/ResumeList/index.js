import styled from "@emotion/styled";
import React from "react";
import { ResumeCard } from "../../components";

const tmpList = [
	{
		id: "meh",
		img: "meh",
		description: "Something Something Something ",
	},
	{
		id: "meh",
		img: "meh",
		description: "Something Something Something ",
	},
	{
		id: "meh",
		img: "meh",
		description: "Something Something Something ",
	},
	{
		id: "meh",
		img: "meh",
		description: "Something Something Something ",
	},
];

const ResumeListContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 5rem 0rem;
	height: fit-content;
`;

const ResumeListCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 50%;
`;

const ResumeList = () => {
	return (
		<ResumeListContainer>
			<ResumeListCardContainer>
				{tmpList.map((card) => {
					return <ResumeCard key={card.id} id={card.id} img={card.img} description={card.description} />;
				})}
			</ResumeListCardContainer>
		</ResumeListContainer>
	);
};

export default ResumeList;
