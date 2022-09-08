import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<div>
				<h3>People</h3>
				<Link to='/Create/People'>
					<button>Create New People</button>
				</Link>
				<h3>Company</h3>
				<Link to='/Create/Company'>
					<button>Create New Company</button>
				</Link>
			</div>
		</div>
	);
}

export default Home;
