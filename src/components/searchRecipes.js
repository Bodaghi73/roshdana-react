import "./searchRecipes.scss";

function searchRecipes() {
	return (
		<div className="section">
			<div className="search">
				<div className="search-box">
					<div className="search-box-inner">
						<div className="search-title">
							<h2>Search Recipes Of Foods</h2>
						</div>
						<div className="search-recipes">
							<input placeholder="Search Recipes"></input>
						</div>
						<div className="number-recipes">
							<label>Number of Recipes:</label>
							<input></input>
						</div>
						<div className="search-button">
							<button>Search</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default searchRecipes;
