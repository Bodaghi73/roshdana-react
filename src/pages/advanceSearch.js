import AdvanceSearchBox from "../components/advanceSearchBox";
import AdvanceSearchResult from "../components/advanceSearchResult";
import { useState } from "react";
import { RecipesProvider } from "../context/recipesContext";

function AdvanceSearch() {
	const [recipes, setRecipes] = useState([]);

	return (
		<RecipesProvider value={{ recipes, setRecipes }}>
			<AdvanceSearchBox></AdvanceSearchBox>
			<AdvanceSearchResult recipes={recipes}></AdvanceSearchResult>
		</RecipesProvider>
	);
}

export default AdvanceSearch;
