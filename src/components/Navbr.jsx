import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbr() {
  const items=useSelector((state)=>state.cart)
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className='logo'>SHOPIFY</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='navlink' to='/'>Home</Link>
            <Link  className='navlink'to='/cart'>Cart</Link>
            <span className='cartitem'> Cart items:{items.length}</span>
            
            
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}
export default Navbr