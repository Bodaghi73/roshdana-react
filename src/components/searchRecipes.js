import "./searchRecipes.scss";

function searchRecipes() {
	return (
		<div className="sectionSearch bgi">
			<div className="search">
				<div className="search-box">
					<form className="search-form">
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
					</form>
				</div>
			</div>
		</div>
	);
}

export default searchRecipes;
