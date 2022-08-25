import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contador from "./pages/reducer";
import Cards from "./pages/cards";
import Show from "./pages/show";
import Media from "./pages/media";
import Renderizacao from "./pages/renderizacao";
import Tarefas from "./pages/tarefas";
import TarefasObj from "./pages/tarefasObjeto";

const Index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/contador" exact element={<Contador />} />
				<Route path="/cards" exact element={<Cards />} />
				<Route path="/mostrarescrito" exact element={<Show />} />
				<Route path="/media" exact element={<Media />} />
				<Route path="/renderizacao" exact element={<Renderizacao />} />
				<Route path="/tarefas" exact element={<Tarefas />} />
				<Route path="/tarefas/obj" exact element={<TarefasObj />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Index;
