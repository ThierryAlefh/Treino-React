import React from "react";
import { useReducer } from "react";

const App = () => {
	const [valor, change] = useReducer((valor, acao) => {
		switch (acao) {
			case "aumentar":
				return valor + 1;
			case "decrementar":
				return valor - 1;
			default:
				return;
		}
	}, 0);

	return (
		<div onMouseMove={(e) => console.log(e)}>
			<h1>Contador (reducer)</h1>
			<section>
				<div>Mostrar {valor}</div>
				<button onClick={() => change('aumentar')}>Aumentar</button>
				<button onClick={() => change('decrementar')}>Decrementar</button>
			</section>
		</div>
	);
};

export default App;
