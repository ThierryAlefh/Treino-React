import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contador from "./pages/contador";
import Cards from "./pages/cards";
import Show from "./pages/show";
import Media from "./pages/media";

const Index = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/contador" exact element={<Contador />} />
				<Route path="/cards" exact element={<Cards />} />
				<Route path="/mostrarescrito" exact element={<Show />} />
				<Route path="/media" exact element={<Media />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Index;
