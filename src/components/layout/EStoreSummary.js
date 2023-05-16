import React from "react";
import { Container } from "react-bootstrap";

const EStoreSummary = () => {
  return (
    <div>
      <Container
        fluid
        className="bg-secondary text-center"
        style={{ backgroundColor: "grey" }}
      >
        <h1 className="text-center">The Generics</h1>
      </Container>
    </div>
  );
};

export default EStoreSummary;
