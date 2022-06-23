import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem, NavbarBrand, Container } from "react-bootstrap";

const Heading = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavbarBrand href="/">All Users</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/addUser">
              Add User
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Heading;
