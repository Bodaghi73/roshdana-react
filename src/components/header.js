import Logo from "../assets/imgs/logo.png";
import "./header.scss";

function header() {
	return (
		<header>
			<div className="header">
				<div className="logo">
					<img src={Logo} alt="food"></img>
				</div>
				<div className="menu">
					<ul>
						<li>
                            <a href="/">Home</a>
                        </li>
						<li>
                            <a href="/AdvanceSearch">Advance Search</a>
                        </li>
						<li>
                            <a href="/">About</a>
                        </li>
					</ul>
				</div>
				<div className="auth-buttons">
                    <button><a href="/">login</a></button>
                    <button><a href="/">signup</a></button>
                </div>
			</div>
		</header>
	);
}

export default header;
