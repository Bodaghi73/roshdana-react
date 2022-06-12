import SearchRecipes from "../components/searchRecipes";
import Recipes from "../components/recipes";

function home() {
    return(
        <div>
            <SearchRecipes></SearchRecipes>
            <Recipes></Recipes>
        </div>
    );
}

export default home;