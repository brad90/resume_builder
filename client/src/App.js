import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, ResumeList, Login, ResumeEdit } from "./pages";
import { Navbar } from "./components";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="resume-templates" element={<ResumeList />} />
				<Route path="login" element={<Login />} />
				<Route path="resume/edit/name" element={<ResumeEdit />} />
			</Routes>
		</div>
	);
}

export default App;
