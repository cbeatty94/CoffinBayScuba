import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css'
// import '../App.css'



function NavBar() {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/">Coffin Bay Scuba</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#chart">Courses</Nav.Link>
                <Nav.Link href="#action2">Dive Club</Nav.Link>
                <NavDropdown title="More Info" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="#action5">FAQ</NavDropdown.Item>
                <NavDropdown.Item href="#action6">Login</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action7">
                    Photos
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search our Site!"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="success">Search</Button>
            </Form>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar