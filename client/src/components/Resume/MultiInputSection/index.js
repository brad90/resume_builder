import React, { Fragment, useState } from "react";
import MultiInput from "../MultiInput";
import MultiInputRender from "../MultiInputRender";

const MultiInputSection = ({ options, setResumeState, stateKey, institionNameLabel }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [selectedIdx, setSelectedIdx] = useState(null);
	return (
		<Fragment>
			{isEditing && <MultiInput handleOnSave={setResumeState} options={options} stateKey={stateKey} selectedIdx={selectedIdx} setIsEditing={setIsEditing} institionNameLabel={institionNameLabel} />}
			{!isEditing && <MultiInputRender options={options} setSelectedIdx={setSelectedIdx} setIsEditing={setIsEditing} institionNameLabel={institionNameLabel} />}
		</Fragment>
	);
};

export default MultiInputSection;
