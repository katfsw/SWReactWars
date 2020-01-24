import React from "react";
import SWCard from "./SWCard";
import { Container, Row } from "reactstrap";

const SWCardGrid = ({ character }) => {
  return (
    <Container>
      <Row>
        {character.map((character, index) => {
          return <SWCard key={index} character={character} />;
        })}
      </Row>
    </Container>
  );
};

export default SWCardGrid;