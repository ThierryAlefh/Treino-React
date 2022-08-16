import React from "react";
import { Link } from "react-router-dom";

const Index = () => {
	return (
		<div>
			<h1>Home</h1>
			<ul>
				<li>
					<Link to="/contador">Contador</Link>
				</li>
				<li>
					<Link to="/cards">Cards</Link>
				</li>
				<li>
					<Link to="/mostrarescrito"> Mostrar escrito</Link>
				</li>
				<li>
					<Link to="/renderizacao">Renderização</Link>
				</li>
			</ul>
		</div>
	);
};

export default Index;
