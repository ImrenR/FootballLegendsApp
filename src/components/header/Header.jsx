
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import logo from  "../../images/logo.png"


const Header = () => {
  return (

    <Container className='d-flex justify-content-center align-items-center min-vh-50 flex-column text-center'> 
          <Image src={logo} rounded /> <br />
          <h1 className='my-2, text-uppercase title' >Football Legends</h1>
          
        
    </Container>
  )
}

export default Header