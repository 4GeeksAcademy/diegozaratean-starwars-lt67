import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div>
					{store.message}
					{store.navesFavoritas.map( (nave,index)=> <p key={index}> {nave} </p> )}
					{store.hobbiesFavoritas.map( (hobbie,index)=> <p key={index}> {hobbie} </p> )}
				</div>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};