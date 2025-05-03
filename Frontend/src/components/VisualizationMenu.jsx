import React, { useState } from "react";
import DataChoiceInput from "./DataChoiceInput";
import DataDisplay from "./DataDisplay";
import { Container } from "react-bootstrap";
export default function VisualizationMenu() {
  const [selectedVis, setSelectedVis] = useState(null);

  return (
    <>
      <Container className="text-center vh-100 d-flex flex-column justify-content-center">
        <DataChoiceInput onSelect={setSelectedVis} />
        <DataDisplay visualization={selectedVis} />
      </Container>
    </>
  );
}
