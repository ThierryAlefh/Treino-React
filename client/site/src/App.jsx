import React from "react";
import { useState } from "react";

const App = () => {
	const [valor, setValor] = useState(0);

	return (
		<div onMouseMove={(e) => console.log(e)}>
			<h1>Contador</h1>
			<section>
				<div>Mostrar {valor}</div>
				<button onClick={() => setValor(valor + 1)}>Aumentar</button>
				<button onClick={() => setValor(valor - 1)}>Decrementar</button>
			</section>
		</div>
	);
};

export default App;
