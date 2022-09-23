import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ReactNode } from "react";
import {
	Box,
	Flex,
	Avatar,
	Link,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
function NavBar() {
	// Dentro de NavDropdown.Item cuando usamos as={Link} to='/Alguna/ruta'
	// estamos combinando React-Bootstrap con React-Router-Dom
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<Box
				bg={useColorModeValue(
					"var(--primary-light)",
					"var(--primary-dark)"
				)}
				px={4}>
				<Flex
					h={16}
					alignItems={"center"}
					justifyContent={"space-between"}>
					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Flex alignItems={"center"}>Company Name</Flex>
							<Menu>
								<MenuButton
									as={Button}
									bg={useColorModeValue(
										"var(--primary-light)",
										"var(--primary-dark)"
									)}>
									Roles
								</MenuButton>
								<MenuList alignItems={"center"}>
									<MenuItem as={RouterLink} to='/Admin'>
										Admin
									</MenuItem>
									<MenuItem as={RouterLink} to='/Candidate'>
										Candidate
									</MenuItem>
									<MenuItem as={RouterLink} to='/Client'>
										Client
									</MenuItem>
									<MenuItem as={RouterLink} to='/Recruiter'>
										Recruiter
									</MenuItem>
								</MenuList>
							</Menu>
							<Flex alignItems={"center"}>
								<Button as={RouterLink} to='/Company/add'>
									Company Add
								</Button>
							</Flex>
						</Stack>
					</Flex>

					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? (
									<MoonIcon />
								) : (
									<SunIcon />
								)}
							</Button>

							<Menu>
								<MenuButton
									as={Button}
									rounded={"full"}
									variant={"link"}
									cursor={"pointer"}
									minW={0}>
									<Avatar
										size={"sm"}
										src={
											"https://avatars.dicebear.com/api/male/username.svg"
										}
									/>
								</MenuButton>
								<MenuList alignItems={"center"}>
									<br />
									<Center>
										<Avatar
											size={"2xl"}
											src={
												"https://avatars.dicebear.com/api/male/username.svg"
											}
										/>
									</Center>
									<br />
									<Center>
										<p>Admin</p>
									</Center>
									<br />
									<MenuDivider />
									<MenuItem>Account Settings</MenuItem>
									<MenuItem>Logout</MenuItem>
								</MenuList>
							</Menu>
						</Stack>
					</Flex>
				</Flex>
			</Box>
		</>
	);
}

export default NavBar;

// {/* <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
// 			<Container>
// 				<Navbar.Brand as={Link} to='/'>
// 					Company name
// 				</Navbar.Brand>

// 				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
// 				<Navbar.Collapse id='responsive-navbar-nav'>
// 					<Nav className='container-fluid'>
// 						<NavDropdown title='Roles' id='collasible-nav-dropdown'>
// 							<NavDropdown.Item as={Link} to='/Admin'>
// 								Admin
// 							</NavDropdown.Item>
// 							<NavDropdown.Item as={Link} to='/Candidate'>
// 								Candidate
// 								{/* El candidato no puede tener accesso al sistema */}
// 							</NavDropdown.Item>

// 							<NavDropdown.Item as={Link} to='/Client'>
// 								Client
// 								{/* Solo puede ver la pantalla de ordenes */}
// 							</NavDropdown.Item>

// 							<NavDropdown.Item as={Link} to='/Recruiter'>
// 								Recruiter
// 							</NavDropdown.Item>
// 							<NavDropdown.Item as={Link} to='/Empresa'>
// 								Company
// 							</NavDropdown.Item>

// 							<NavDropdown.Divider />
// 							<NavDropdown.Item>Separated link</NavDropdown.Item>
// 						</NavDropdown>
// 						{/* Agregar Ordenes y empresas */}
// 						{/* Perfil de las personas Admin, Recruiter y Cliente */}
// 						{/* En el perfil solo va a haber email (al que le llegan notificaciones),  */}
// 						{/* Empresas, candidatos y ordenes tienen un menu diferente en el navbar */}
// 						{/* Admin va a ver un menu de tablas auxiliares --> (Examenes, Skills, Atributos ) */}

// 						<NavDropdown
// 							title='Profile'
// 							as={Button}
// 							className='ms-auto'>
// 							<NavDropdown.Item as={Link} to='/Admin'>
// 								Admin
// 							</NavDropdown.Item>
// 							<NavDropdown.Item as={Link} to='/Candidate'>
// 								Candidate
// 								{/* El candidato no puede tener accesso al sistema */}
// 							</NavDropdown.Item>
// 						</NavDropdown>
// 					</Nav>
// 				</Navbar.Collapse>
// 			</Container>
// 		</Navbar> */}
