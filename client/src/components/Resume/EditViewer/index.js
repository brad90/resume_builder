import React, { useState } from "react";
import styled from "@emotion/styled";
import Template1 from "../../ResumeTemplates/template-1";

const EditViewerContainer = styled.div`
	width: 70%;
	background: rgb(239 246 255);
`;

const EditViewer = ({ resumeState }) => {
	const [zoom, setZoom] = useState(0);

	const handleZoomIn = () => {
		setZoom(zoom + 25);
	};

	const handleZoomOut = () => {
		setZoom(zoom - 25);
	};

	return (
		<EditViewerContainer>
			<div className="w-full flex h-10"></div>
			<div className="w-full flex h-full justify-center align-center">
				<Template1 resumeState={resumeState} />
			</div>
		</EditViewerContainer>
	);
};

export default EditViewer;
