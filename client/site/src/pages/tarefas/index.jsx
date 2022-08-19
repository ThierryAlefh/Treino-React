import React, { useState } from "react";
import Tarefa from "../../components/tarefa";

const Index = () => {
	const [lista, setLista] = useState([]);
	const [tarefa, setTarefa] = useState("");

	const add = () => setLista([...lista, tarefa]);
	const remove = (cur) => setLista(lista.filter((item) => cur !== item));

	return (
		<div>
			<h1>Lista de tarefas</h1>

			<hr />

			<div>
				Tarefa: <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
				<button onClick={add}>Adicionar</button>
			</div>
			{lista.map((item) => (
				<Tarefa item={item} remove={remove} />
			))}
		</div>
	);
};

export default Index;
