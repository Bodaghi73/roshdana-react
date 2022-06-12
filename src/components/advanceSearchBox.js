import "./searchRecipes.scss";

function advanceSearchBox() {
	return (
		<div className="sectionSearch">
			<div className="search">
				<div className="search-box">
					<div className="search-box-inner">
						<div className="search-title">
							<h2>Search Recipes By Ingredients</h2>
						</div>
						<div className="search-recipes">
							<input placeholder="Enter an ingredient"></input>
							<input placeholder="Enter an ingredient"></input>
							<input placeholder="Enter an ingredient"></input>
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

export default advanceSearchBox;
