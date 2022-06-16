import SearchRecipes from "../components/searchRecipes";
import Recipes from "../components/recipes";
import {useState} from "react";
import { RecipesProvider } from "../context/recipesContext";

function Home() {
    const [recipes, setRecipes] = useState([])
    return(
        <RecipesProvider value={{recipes, setRecipes}}>
            <SearchRecipes></SearchRecipes>
            <Recipes recipes={recipes}></Recipes>
        </RecipesProvider>
    );
}

export default Home;