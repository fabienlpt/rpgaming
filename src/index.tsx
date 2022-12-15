import "./reset.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./ts/services/theme";
import NavBar from "./ts/components/header";
import Home from "./ts/pages/Home";
import Agenda from "./ts/pages/Agenda";
import Favoris from "./ts/pages/Favoris";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<BrowserRouter>
				<ThemeProvider theme={theme}>
					<NavBar/>
					<Routes >
						<Route path="/" element={<Home/>} />
						<Route path="/agenda" element={<Agenda/>} />
						<Route path="/favoris" element={<Favoris/>} />
					</Routes>
				</ThemeProvider>
		</BrowserRouter>
	
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
