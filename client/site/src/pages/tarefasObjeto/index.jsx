import React, { useState } from "react";

const Index = () => {
	const [lista, setLista] = useState({});
	const [tarefa, setTarefa] = useState("");

	const add = () => setLista({ ...lista, tarefa });
	const remove = (cur) => setLista(lista.filter((item) => cur !== item));

	return (
		<div>
			<h1>Lista de tarefas (objeto)</h1>

			<hr />

			<div>
				Tarefa: <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
				<button onClick={add}>Adicionar</button>
			</div>
		</div>
	);
};

export default Index;
