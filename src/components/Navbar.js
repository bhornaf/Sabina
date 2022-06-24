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
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container">
        //         <a className="navbar-brand" href="#">Sabina</a>
        //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item active">
        //                     <a className="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Catalogo</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Carrito</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a className="nav-link" href="#">Login</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <CartWidget Cantidad="4"/>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default NavBar;
