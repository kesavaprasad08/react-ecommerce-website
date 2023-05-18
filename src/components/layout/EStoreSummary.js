import React from "react";
import { Container } from "react-bootstrap";

const EStoreSummary = () => {
  return (
    <>
      <Container
        fluid
        className="bg-secondary text-center"
        style={{ backgroundColor: "grey",border:'2px solid',borderColor:'white' }}
      >
        <p style={{fontSize:'129px', color:'white'}} className="text-center">The Generics</p>
      </Container>
    </>
  );
};

export default EStoreSummary;
