import React from "react";
import "./index.sass";

const Index = (props) => {
	return (
		<div className={(props.orientacao || "") + " card"}>
			<div>
				<h1>{props.titulo}</h1>
				<p>{props.descricao}</p>
			</div>
			<img src={props.imagem} alt="" />
		</div>
	);
};

export default Index;
