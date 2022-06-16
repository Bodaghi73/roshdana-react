import React from "react";

const RecipesContext = React.createContext({
	recipes: [],
	setRecipes: (recipes) => {},
});
export const RecipesProvider = RecipesContext.Provider;
export default RecipesContext;
