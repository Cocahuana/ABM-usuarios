import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function NavBar() {
	// Dentro de NavDropdown.Item cuando usamos as={Link} to='/Alguna/ruta'
	// estamos combinando React-Bootstrap con React-Router-Dom
	return (
		<Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
			<Container>
				<Navbar.Brand as={Link} to='/'>
					Company name
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<NavDropdown title='Roles' id='collasible-nav-dropdown'>
							<NavDropdown.Item as={Link} to='/Admin'>
								Admin
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to='/Candidate'>
								Candidate
							</NavDropdown.Item>

							<NavDropdown.Item as={Link} to='/Client'>
								Client
							</NavDropdown.Item>

							<NavDropdown.Item as={Link} to='/Recruiter'>
								Recruiter
							</NavDropdown.Item>

							<NavDropdown.Divider />
							<NavDropdown.Item>Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
