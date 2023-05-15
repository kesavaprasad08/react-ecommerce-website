import React from "react";
import { Container,Navbar,Button } from "react-bootstrap";

const EStoreHeader = (props) => {
    return (
        <div>
<Navbar bg='dark' expand='sm' variant='dark'>
  <Container>
    <Navbar.Brand>Home</Navbar.Brand>
    <Navbar.Brand>Store</Navbar.Brand>
    <Navbar.Brand>About</Navbar.Brand>
    <Button class="btn btn-info" onClick={props.onOpen} size="sm">Cart 0</Button>
   
  </Container>


</Navbar>
        </div>
    )
}

export default EStoreHeader;