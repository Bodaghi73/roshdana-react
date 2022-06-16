import "./recipesResult.scss";
import { useState, useEffect } from "react";
import axios from "axios";

function Recipes(props) {
	const [list, setList] = useState([]);
	useEffect(() => {
		if (props?.recipes && props?.recipes.length>0) {
			setList(props?.recipes);
		} else {
			async function getData() {
				const response = await axios.get("https://api.spoonacular.com/recipes/random", {
					params: { number: 8, apiKey: "f1ed3ee34df94006942d5ababc6abfa0" },
				});
				setList(response.data.recipes)
			}
			getData();
		}
	}, [props.recipes]);
	return (
		<div className="new-recipes">
			<div className="box">
				<div className="recipes-header">
					<h2>New Recipes</h2>
				</div>
				<div className="recipes">
					<div className="recipes-content">
						{list.map((recipe) => {
							return (
								<article className="recipes-card" key={recipe.id}>
									<div className="img-card">
										<img src={recipe.image} alt="food"></img>
									</div>
									<div className="info-card">
										<h3>{recipe.title}</h3>
										<p>big hamburgerbig hamburgerbig hamburgerbig hamburgerbig hamburgerbig hamburger</p>
									</div>
									<div className="button-card">
										<button>More</button>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Recipes;
