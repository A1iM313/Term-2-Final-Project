import React, { useState } from "react";
import DataChoiceInput from "./DataChoiceInput";
import DataDisplay from "./DataDisplay";
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import HeatMap from "./HeatMap";

const VisualizationMenu = () => {
  const [selectedVis, setSelectedVis] = useState("null");

  return (
    <div style={{ paddingTop: "30px" }}>
      <h1>Hello</h1>
      <h4>Explanation goes here</h4>
      <Dropdown>
        <Dropdown.Toggle>Select Visualization</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setSelectedVis("bar graph")}>
            Bar Graph
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedVis("line graph")}>
            Line Graph
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSelectedVis("heatmap")}>
            Heatmap
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {selectedVis === "line graph" && <LineGraph />}
      {selectedVis === "bar graph" && <BarGraph />}
      {selectedVis === "heatmap" && <HeatMap />}
    </div>
  );
};

export default VisualizationMenu;
