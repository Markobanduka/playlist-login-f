import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">
          Home
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;

// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/register">Register</Link>
//       <Link to="/login">Login</Link>
//       <Link to="/">Home</Link>
//     </nav>
//   );
// };

// export default Navbar;
