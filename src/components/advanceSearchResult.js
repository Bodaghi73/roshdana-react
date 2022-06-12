import "./recipesResult.scss";
import Food from "../assets/imgs/big-hamburger.webp";
import Food2 from "../assets/imgs/hot-shakshuka.webp";

function recipes() {
	return (
		<div className="new-recipes">
			<div className="box">
				<div className="recipes-header">
					<h2>Result For Search of Recipes by ingredients</h2>
				</div>
				<div className="recipes">
					<div className="recipes-content">
						<article className="recipes-card">
							<div className="img-card">
								<img src={Food} alt="food"></img>
							</div>
							<div className="info-card">
								<h3>big hamburger</h3>
								<p>big hamburgerbig hamburgerbig hamburgerbig hamburgerbig hamburgerbig hamburger</p>
							</div>
							<div className="button-card">
								<button>More</button>
							</div>
						</article>
						<article className="recipes-card">
							<div className="img-card">
								<img src={Food2} alt="food"></img>
							</div>
							<div className="info-card">
								<h3>big hamburger</h3>
								<p>big hamburgerbig hamburgerbig hamburgerbig hamburgerbig hamburgerbig hamburger</p>
							</div>
							<div className="button-card">
								<button>More</button>
							</div>
						</article>
						
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default recipes;
