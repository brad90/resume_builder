import React from "react";
import styled from "@emotion/styled";
import { Button } from "../../components";
import { Link } from "react-router-dom";

const Fold = styled.div`
	background-color: blue;
	height: 80vh;
	padding: 5rem 12rem;
`;

const FoldContentLeft = styled.div`
	text-align: left;
`;

const FoldContentRight = styled.div``;

const Home = () => {
	return (
		<Fold>
			<FoldContentLeft>
				<h2> Buld a CV worth opening</h2>
				<h4> Something something something</h4>
				<Link to="/resume-templates">
					<Button text="Start My Resume" btnColor="blue" txtColor="white" href />
				</Link>
			</FoldContentLeft>
		</Fold>
	);
};

export default Home;
