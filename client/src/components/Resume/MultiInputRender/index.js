import styled from "@emotion/styled";
import React, { Fragment } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

const DatesContainer = styled.div`
	display: flex;
	margin-bottom: 1.5rem;

	h3 {
		font-weight: 300;
	}
`;

const MultiRenderContainer = styled.div`
	margin-bottom: 3rem;
	width: 100%;
`;

const MultiRenderHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;

	button {
		border: none;
		background: transparent;

		&:hover {
			cursor: pointer;
		}
	}
`;

const NewEntry = styled.button`
	display: flex;
	width: 100%;
	justify-content: center;
	align-center: center;
	border: dashed 1px blue;
	padding: 1.5rem;
	background: transparent;

	&:hover {
		cursor: pointer;
	}
`;

const MultiInputRender = ({ options, setSelectedIdx, setIsEditing }) => {
	const onEditMode = (idx) => {
		setSelectedIdx(idx);
		setIsEditing(true);
	};

	const onAddnew = () => {
		setIsEditing(true);
	};

	const onDelete = (idx) => {};

	return (
		<Fragment>
			{options &&
				options.map((op, index) => {
					return (
						<MultiRenderContainer>
							<MultiRenderHeader>
								<h4>{op.title}</h4>
								<h4>{op.institute}</h4>
								<button onClick={() => onEditMode(index)} alt="edit">
									<AiFillEdit size={20} />
								</button>
								<button onClick={() => onDelete(index)} alt="edit">
									<RiDeleteBinLine size={20} />
								</button>
							</MultiRenderHeader>
							<DatesContainer>
								<h3>
									{op.dateFrom} - {op.dateTo}
								</h3>
							</DatesContainer>
							{op.editorState}
						</MultiRenderContainer>
					);
				})}
			<NewEntry onClick={() => onAddnew()}>
				<h3>Add New Experience</h3>
			</NewEntry>
		</Fragment>
	);
};

export default MultiInputRender;
