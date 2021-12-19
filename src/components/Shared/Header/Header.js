import React from 'react';
import { Container, Nav, Navbar, Button, DropdownButton, ButtonGroup, NavDropdown, Dropdown } from 'react-bootstrap';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { IoGameControllerOutline } from "react-icons/io5";
import './Header.css';
import { FaUserCircle } from "react-icons/fa";
import useAuth from '../../../hooks/useAuth';

const Header = (props) => {
    const { user, admin, isLoading, authError, registerUser, loginUser, logout } = useAuth()

    const selectedGames = props.data;
    const size = selectedGames.length
    console.log(size)
    // console.log(props.data.length)
    console.log(admin);

    const history = useHistory();

    const logOutButton = () => {
        logout();
        history.push('/login')

    }

    return (
        <div>
            <Navbar className='nav-bar mt-3' expand="lg">
                <Container >
                    <Navbar.Brand>
                        <NavLink className='text-decoration-none text-white ' to='/home'>
                            <h2 className='logo' >FreeVerse</h2>
                        </NavLink>


                    </Navbar.Brand>
                    <Navbar.Toggle className='bg-light' id='scroll' aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-lg-0"
                            style={{ maxHeight: '200px' }}
                            navbarScroll
                        >
                            <NavLink
                                className='me-md-4 nav-text-style text-decoration-none  mx-auto'
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#484848"
                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className='me-4 nav-text-style text-decoration-none ms-3'
                                to="/allgames"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#484848"
                                }}
                            >
                                All Games
                            </NavLink>
                            <NavLink
                                className='me-4 nav-text-style text-decoration-none ms-3 mx-auto'
                                to="/bycategory"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#484848"
                                }}
                            >
                                Browse By Category
                            </NavLink>

                            <NavLink
                                className='me-4 nav-text-style text-decoration-none ms-3 mx-auto'
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#484848"
                                }}
                            >
                                About Us
                            </NavLink>

                            <NavLink
                                className='me-4 nav-text-style text-decoration-none ms-3 mx-auto'
                                to="/myplaylist"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "#484848"
                                }}
                            >
                                <IoGameControllerOutline /> My Playlist {size}
                            </NavLink>

                        </Nav>


                        <span className=''>

                            {user?.email ? <p></p> :
                                <Link to='/login'><Button variant='outline-light'>Login</Button></Link>}

                        </span>
                        {user?.email &&
                            <div className='d-md-flex'>

                                <div>

                                    <Dropdown>
                                        <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                                            <span>Welcome,</span> <FaUserCircle /> {user.displayName}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='text-center '>
                                            <NavLink
                                                className='me-4 text-dark nav-text-style text-decoration-none ms-3 mx-auto'
                                                to="/myplaylist"
                                                activeStyle={{
                                                    fontWeight: "bold",
                                                    color: "#484848"
                                                }}
                                            >
                                                <IoGameControllerOutline /> My Playlist {size}
                                            </NavLink>

                                            {/* <Nav.Link><Link className='text-decoration-none text-muted' to="/dashboard">My Dashboard</Link></Nav.Link> */}

                                            {admin ? <Nav.Link><Link className='text-decoration-none text-muted' to="/dashboard">My Dashboard(Admin use Only)</Link></Nav.Link> : <div></div>}

                                            {/* <Nav.Link><Link className={admin ? 'text-decoration-none text-muted' : 'disabled text-decoration-none text-muted'} to="/dashboard">My Dashboard(Admin use Only)</Link></Nav.Link> */}


                                            <Dropdown.Item href="#/action-3"><Button variant='outline-dark' onClick={logOutButton}>Logout</Button></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;