
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import logo from  "../../images/logo.png"


const Header = () => {
  return (

    <Container>
          <Image src={logo} rounded />
          <h1 className='my-2, text-uppercase title' >Football Legends</h1>
          
        
    </Container>
  )
}

export default Header