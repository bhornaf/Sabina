import { Navbar, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Sabina</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav>
                        <Link to="/car">Carrito</Link>
                        <Link to="/">Inicio</Link>
                        <Link to="/category/men's clothing">Ropa</Link>
                        <Link to="/category/jewelery">Joyas</Link>
                        <Link to="/category/electronics">Electronica</Link>
                        <Link to="">Login</Link>
                        <CartWidget Cantidad="4" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default NavBar;
