import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import Card from "../components/Card.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	const [starships,setStarships] = useState([])

	let navesQuemadas = [
		{
		"uid": "2",
		"name": "CR90 corvette",
		"url": "https://www.swapi.tech/api/starships/2"
		},
		{
		"uid": "3",
		"name": "Star Destroyer",
		"url": "https://www.swapi.tech/api/starships/3"
		}
	]

	
	useEffect(()=>{
		console.log("estoy listo")
		fetch("https://swapi.dev/api/starships")
		.then( (reponse)=>reponse.json() )
		.then( (data)=>setStarships(data.results)  )
		// .then( (data)=>console.log(data.results) )

	}, [])

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			

			<h1>Naves API</h1>
			{starships.map( (nave, index)=> <Card key={nave.uid} nave={nave} uid={nave.uid} model={nave.model} name= {nave.name} />)}
		
		

		</div>
	);
}; 