import axios from "axios";
import { useState, useContext } from "react";
import RecipesContext from "../context/recipesContext";
import "./searchRecipes.scss";

const AdvanceSearchBox = () => {
	const [inputs, setInputs] = useState({
		ingredient1: "",
		ingredient2: "",
		ingredient3: "",
		number: "",
	});
	const { setRecipes } = useContext(RecipesContext);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const advanceSearch = async (event) => {
		event.preventDefault();
		const response = await axios.get("https://api.spoonacular.com/recipes/findByIngredients", {
			params: {
				ingredients: inputs.ingredient1
					? inputs.ingredient1
					: "" + inputs.ingredient2
					? ",+" + inputs.ingredient2
					: "" + inputs.ingredient3
					? ",+" + inputs.ingredient3
					: "",
				number: inputs.number,
				apiKey: "f1ed3ee34df94006942d5ababc6abfa0",
			},
		});
		setRecipes(response.data);
	};

	return (
		<div className="sectionSearch">
			<div className="search">
				<div className="search-box">
					<form className="search-form" onSubmit={advanceSearch}>
						<div className="search-title">
							<h2>Search Recipes By Ingredients</h2>
						</div>
						<div className="search-recipes">
							<input
								type="text"
								name="ingredient1"
								value={inputs.ingredient1 || ""}
								onChange={handleChange}
								placeholder="Enter an ingredient"
							></input>
							<input
								type="text"
								name="ingredient2"
								value={inputs.ingredient2 || ""}
								onChange={handleChange}
								placeholder="Enter an ingredient"
							></input>
							<input
								type="text"
								name="ingredient3"
								value={inputs.ingredient3 || ""}
								onChange={handleChange}
								placeholder="Enter an ingredient"
							></input>
						</div>
						<div className="number-recipes">
							<label>Number of Recipes:</label>
							<input type="number" name="number" value={inputs.number} onChange={handleChange}></input>
						</div>
						<div className="search-button">
							<button type="submit">Search</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdvanceSearchBox;
