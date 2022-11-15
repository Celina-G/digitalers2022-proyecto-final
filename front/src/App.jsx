import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from './components/Login';
import NotFound from "./components/NotFound";
import Publications from "./components/Publications";
import PublicationService from "./components/PublicationService";


export default class App extends Component {

	render() {
		return (
			<BrowserRouter>

				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/publications" element={<Publications />} />
					<Route path="/publications/new-publication" element={<PublicationService />} />
					<Route path="*" element={<NotFound />} />
					<Route />
				</Routes>
			</BrowserRouter>
		);
	}
}