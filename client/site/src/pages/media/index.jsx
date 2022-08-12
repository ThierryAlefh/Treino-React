import React, { useState } from "react";
import "./index.sass";

const Index = () => {
	const [m1, setM1] = useState("");
	const [m2, setM2] = useState("");
	const [m3, setM3] = useState("");

	return (
		<div className="media">
			<h1>Media daora</h1>

			<div className="inputs">
				<input placeholder="Nota 1" type="number" value={m1} onChange={(e) => setM1(Number(e.target.value))} max="10" min="0" />
				<input placeholder="Nota 2" type="number" value={m2} onChange={(e) => setM2(Number(e.target.value))} max="10" min="0" />
				<input placeholder="Nota 3" type="number" value={m3} onChange={(e) => setM3(Number(e.target.value))} max="10" min="0" />
				<div>Média: {(m1 + m2 + m3) / 3}</div>
			</div>
		</div>
	);
};

export default Index;
