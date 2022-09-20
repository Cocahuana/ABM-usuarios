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
								{/* El candidato no puede tener accesso al sistema */}
							</NavDropdown.Item>

							<NavDropdown.Item as={Link} to='/Client'>
								Client
								{/* Solo puede ver la pantalla de ordenes */}
							</NavDropdown.Item>

							<NavDropdown.Item as={Link} to='/Recruiter'>
								Recruiter
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to='/Empresa'>
								Company
							</NavDropdown.Item>

							<NavDropdown.Divider />
							<NavDropdown.Item>Separated link</NavDropdown.Item>
						</NavDropdown>
						{/* Agregar Ordenes y empresas */}
						{/* Perfil de las personas Admin, Recruiter y Cliente */}
						{/* En el perfil solo va a haber email (al que le llegan notificaciones),  */}
						{/* Empresas, candidatos y ordenes tienen un menu diferente en el navbar */}
						{/* Admin va a ver un menu de tablas auxiliares --> (Examenes, Skills, Atributos ) */}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
