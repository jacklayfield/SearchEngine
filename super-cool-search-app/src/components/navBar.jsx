import { Container, Nav, Navbar } from "react-bootstrap";
// This navbar was taken from react-bootstrap
export const NavBar = () => {
  return (
    <Navbar fixed="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">SuperCoolSearch</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Search</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
