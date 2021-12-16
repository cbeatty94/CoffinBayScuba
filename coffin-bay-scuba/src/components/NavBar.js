import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavBar.css'
import newSealLogo from '../logo/newSealLogo.png'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import '../App.css'



function NavBar() {
    return(
        <Navbar className='navbar' expand="lg">
        <img href="/" src={newSealLogo} alt='Seal Logo' className='navLogo'  />
        <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link href="#chart" className='navLink'>Courses</Nav.Link>
                <Nav.Link href="#action2" className='navLink'>Dive Club</Nav.Link>
                <NavDropdown title="More Info" className='navLink' id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3" className='navLink'>About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action4" className='navLink'>Contact Us</NavDropdown.Item>
                <NavDropdown.Item href="#action5" className='navLink'>FAQ</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action7" className='navLink'>
                    Photos
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            {/* <Form className="d-flex">
                <FormControl
                type="search"
                placeholder="Search our Site!"
                className="me-2"
                aria-label="Search"
                /> */}
            {/* </Form> */}
            <Button className='navButton'>Sign Up/Register</Button>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar