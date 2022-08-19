import React from "react";

const Index = (props) => {
	return (
		<div>
			{props.item}
			<span onClick={() => props.remove(props.item)}>(X)</span>
		</div>
	);
};

export default Index;
