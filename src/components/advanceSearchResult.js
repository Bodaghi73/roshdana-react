import "./recipesResult.scss";

function AdvanceSearchResult(props) {
	return (
		<div className="new-recipes">
			<div className="box">
				<div className="recipes-header">
					<h2>Result For Search of Recipes by ingredients</h2>
				</div>
				<div className="recipes">
					<div className="recipes-content">
						{props.recipes.map((recipe) => {
							return (
								<article className="recipes-card" key={recipe.id}>
									<div className="img-card">
										<img src={recipe.image} alt="food"></img>
									</div>
									<div className="info-card">
										<h3>{recipe.title}</h3>
										{/* <p>big hamburgerbig hamburgerbig hamburgerbig hamburgerbig hamburgerbig hamburger</p> */}
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

export default AdvanceSearchResult;
