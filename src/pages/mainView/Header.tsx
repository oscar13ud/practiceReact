import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../../App.css"

export const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/">ToDo List</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Button variant="primary" size="lg">
          Login
        </Button>{' '}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
