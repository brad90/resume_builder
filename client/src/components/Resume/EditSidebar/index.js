import React, { useState } from "react";
import styled from "@emotion/styled";
import MultiInputSection from "../MultiInputSection";

const EditSidebarContainer = styled.div`
	width: 30%;
	padding: 4rem;
	display: block;
	justify-content: left;
	overflow-y: scroll;
`;

const FormSection = styled.div`
	display: block;
	text-align: left;
	margin-bottom: 3.5rem;
`;

const FormSectionHeader = styled.h3`
	font-weight: 900;
	font-size: 28px;
	margin-bottom: 2rem;
`;

const InputSection = styled.div`
	display: inline-grid;
	width: 100%;
	margin-bottom: 2rem;

	label {
		margin-bottom: 0.5rem;
		color: #999999;
	}

	input {
		background-color: #f3f6f4;
		border: none;
		padding: 0.5rem;
		border-radius: 0.25rem;

		&::selection {
			border: none;
			border-bottom: 1px solid blue;
		}
	}
`;

const EditSidebar = ({ resumeState, setResumeState }) => {
	const handleOnSave = (newState) => {
		setResumeState({ ...resumeState, ...newState });
	};

	const handleInput = (newState) => {
		console.log(newState);
		setResumeState({ ...resumeState, ...newState });
	};
	return (
		<EditSidebarContainer>
			<FormSection>
				<FormSectionHeader>Details</FormSectionHeader>
				<InputSection>
					<label>Frist Name</label>
					<input onInput={(input) => handleInput({ firstname: input.target.value })} />
				</InputSection>
				<InputSection>
					<label>Last Name</label>
					<input onInput={(input) => handleInput({ lastname: input.target.value })} />
				</InputSection>
				<InputSection>
					<label>Job Title</label>
					<input onInput={(input) => handleInput({ jobtitle: input.target.value })} />
				</InputSection>
				<InputSection>
					<label>Email</label>
					<input onInput={(input) => handleInput({ email: input.target.value })} />
				</InputSection>
				<InputSection>
					<label>Phone</label>
					<input onInput={(input) => handleInput({ phone: input.target.value })} />
				</InputSection>
			</FormSection>
			<FormSection>
				<FormSectionHeader>Experience</FormSectionHeader>
				<MultiInputSection options={resumeState.experience} setResumeState={handleOnSave} stateKey="experience" titleInputLabel="Job Title" institionNameLabel="Company" />
			</FormSection>
			<FormSection>
				<FormSectionHeader>Education</FormSectionHeader>
				<MultiInputSection options={resumeState.education} setResumeState={handleOnSave} stateKey="education" titleInputLabel="Degree Name" institionNameLabel="University/College" />
			</FormSection>
		</EditSidebarContainer>
	);
};

export default EditSidebar;
