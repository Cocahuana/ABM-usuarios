import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<h3>Admin</h3>
						<Link to='/Add/Company'>
							<button>Create New Admin</button>
						</Link>
					</li>
					<li>
						<h3>Candidate</h3>
						<Link to='/Create/People'>
							<button>Create New Candidate</button>
						</Link>
					</li>
					<li>
						<h3>Clients</h3>
						<Link to='/Add/Company'>
							<button>Create New Candidate</button>
						</Link>
					</li>
					<li>
						<h3>Recruiter</h3>
						<Link to='/Add/Company'>
							<button>Create New Recruiter</button>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default NavBar;
