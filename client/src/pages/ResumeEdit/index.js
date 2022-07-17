import styled from "@emotion/styled";
import React from "react";
import { useState } from "react";
import { ResumeEditSidebar, ResumeEditViewer } from "../../components";

const ResumeEditContainer = styled.div`
	width: 100%;
	display: flex;
	height: 90vh;
`;

const ResumeEdit = () => {
	const [resumeState, setResumeState] = useState({ experience: [], education: [] });
	return (
		<ResumeEditContainer>
			<ResumeEditSidebar resumeState={resumeState} setResumeState={setResumeState} />
			<ResumeEditViewer resumeState={resumeState} />
		</ResumeEditContainer>
	);
};

export default ResumeEdit;
