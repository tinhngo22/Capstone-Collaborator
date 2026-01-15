import { NavLink, Outlet } from "react-router";
import "./components.css";
function Home() {
	return (
		<>
			<div className="layout">
				<nav className="nav">
					<NavLink to="/">Capstone Projects</NavLink>|
					<NavLink to="/collaborator">Collaborators</NavLink>
				</nav>
				<Outlet />
			</div>
		</>
	);
}

export default Home;
