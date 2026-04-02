import { Link, NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function AppNavbar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="border-bottom border-success"
    >
      <Container>

        {/* Brand */}
        <Navbar.Brand as={Link} to="/" className="text-success">
          Matthew Chandran
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">

            <NavLink to="/" end className="nav-link">
              {({ isActive }) => (
                <span className={isActive ? "nav-active" : ""}>
                  Home
                </span>
              )}
            </NavLink>

            <NavLink to="/projects" className="nav-link">
              {({ isActive }) => (
                <span className={isActive ? "nav-active" : ""}>
                  Projects
                </span>
              )}
            </NavLink>

            <NavLink to="/resume" className="nav-link">
              {({ isActive }) => (
                <span className={isActive ? "nav-active" : ""}>
                  Resume
                </span>
              )}
            </NavLink>

            <NavLink to="/contact" className="nav-link">
              {({ isActive }) => (
                <span className={isActive ? "nav-active" : ""}>
                  Contact
                </span>
              )}
            </NavLink>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default AppNavbar;