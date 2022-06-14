import axios from "axios";
import { useState, useContext } from "react";
import RecipesContext from "../context/recipesContext";
import "./searchRecipes.scss";

function SearchRecipes() {
	const [input, setInput] = useState({
		title: "",
		number: "",
	});

	const { setRecipes } = useContext(RecipesContext);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInput((values) => ({ ...values, [name]: value }));
	};

	const searchRecipes = async (event) => {
		event.preventDefault();
		const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
			params: { query: input.title, number: input.number, apiKey: "f1ed3ee34df94006942d5ababc6abfa0" },
		});
		setRecipes(response.data.results)
	};
	return (
		<div className="sectionSearch bgi">
			<div className="search">
				<div className="search-box">
					<form className="search-form" onSubmit={searchRecipes}>
						<div className="search-title">
							<h2>Search Recipes Of Foods</h2>
						</div>
						<div className="search-recipes">
							<input type="text" name="title" value={input.title} onChange={handleChange} placeholder="Search Recipes"></input>
						</div>
						<div className="number-recipes">
							<label>Number of Recipes:</label>
							<input type="number" name="number" value={input.nember} onChange={handleChange}></input>
						</div>
						<div className="search-button">
							<button>Search</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default SearchRecipes;
