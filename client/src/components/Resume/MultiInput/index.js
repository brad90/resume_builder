import styled from "@emotion/styled";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, ContentState, convertFromHTML } from "draft-js";

const MultiInputContainer = styled.div`
	margin-bottom: 2rem;
`;

const SaveSection = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 1rem;
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

const TextArea = styled.div``;

const MultiInput = ({ handleOnSave, options, selectedIdx, stateKey, setIsEditing, institionNameLabel }) => {
	const [dateFrom, setDateFrom] = useState(options[selectedIdx]?.dateTo || Date.now());
	const [dateTo, setDateTo] = useState(options[selectedIdx]?.dateFrom || Date.now());
	const [blob, setBlob] = useState(options[selectedIdx]?.blob || null);
	const [title, setTitle] = useState(options[selectedIdx]?.title || null);
	const [institute, setInstitute] = useState(options[selectedIdx]?.institue || null);

	const onSave = () => {
		const newState = {};
		if (selectedIdx === 0 || selectedIdx) {
			options.splice(selectedIdx, 1, { title, institute, dateFrom, dateTo, blob });
			newState[stateKey] = options;
		} else {
			const newOption = { title, institute, dateFrom, dateTo, blob };
			newState[stateKey] = [...options, newOption];
		}
		setIsEditing(false);
		console.log(newState);
		handleOnSave(newState);
	};

	return (
		<MultiInputContainer>
			<SaveSection>
				<button onClick={() => onSave()}>Save</button>
			</SaveSection>
			<InputSection>
				<label>Job Title</label>
				<input value={title} onInput={(input) => setTitle(input.target.value)} />
			</InputSection>

			<InputSection>
				<label>{institionNameLabel}</label>
				<input value={institute} onInput={(input) => setInstitute(input.target.value)} />
			</InputSection>

			<DatePicker>
				<h4>Select Dates</h4>
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DatePicker
						label="Basic example"
						value={dateFrom}
						onChange={(newValue) => {
							setDateFrom(newValue);
						}}
						renderInput={(params) => <TextField {...params} />}
					/>
				</LocalizationProvider>
				<div>Date From: {dateTo} </div>
			</DatePicker>
			<TextArea>
				<Editor
					editorState={blob}
					toolbarClassName="toolbarClassName"
					wrapperClassName="wrapperClassName"
					editorClassName="editorClassName"
					onEditorStateChange={setBlob}
					toolbar={{ options: ["inline", "fontSize", "fontFamily", "list", "textAlign", "link"] }}
				/>
			</TextArea>
		</MultiInputContainer>
	);
};

export default MultiInput;
