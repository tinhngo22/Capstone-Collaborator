import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import CapstonePage from "./CapstonePage.jsx";
import CollaboratorPage from "./CollaboratorPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
	<BrowserRouter basename={import.meta.env.BASE_URL}>
		<ToastContainer />
		<Routes>
			<Route path="/" element={<Home />}>
				<Route index element={<CapstonePage />}></Route>

				<Route path="collaborator" element={<CollaboratorPage />}></Route>
			</Route>
		</Routes>
	</BrowserRouter>
);
