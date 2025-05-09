import { React, useState, onSelect } from "react";
import { Button, Container } from "react-bootstrap";
import {
  Dropdown,
  DropdownMenu,
} from "react-bootstrap";

// This is the dropdown that the user interacts with in order to select their visualization.
const DataDropdown = ({ onSelect }) => {
  const [dropdownValue, setDropdownValue] = useState("");

// This const handles the dropdownvalue and changes it later on according to user input. event.target.value is whats changed, although it might be better to have it be dropdown value
  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  return (
    <>
      <handleDropdownChange />
      <dropdownValue />
    </>
  );
};
const handleVisualize = ({ dropdownValue }) => {
  if (dropdownValue) {
    onSelect(dropdownValue);
  }
};

// This is the dropdown menu that allows the user to choose their selection and changes the value of dropdownvalue accordingly, using handledropdownchange
const UserDropdown = ({
  handleDropdownChange,
  dropdownValue,
  handleVisualize,
}) => {
  return (
    <>
      <Dropdown onSelect={handleDropdownChange}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {dropdownValue || "Select Visualization"}
        </Dropdown.Toggle>
        <DropdownMenu>
          <Dropdown.Item
            onClick={() => handleDropdownChange("Histogram")}
            href="#/action-1"
          >
            Histogram
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleDropdownChange("Bar Graph")}
            href="#/action-2"
          >
            Bar Graph
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => handleDropdownChange("Heatmap")}
            href="#/action-3"
          >
            Heatmap
          </Dropdown.Item>
        </DropdownMenu>
      </Dropdown>
      <handleVisualize />
    </>
  );
};

//This is the button that initializes the visualization change
const SelectButton = ({ handleVisualize }) => {
  return (
    <Button onClick={handleVisualize} variant="primary">
      Visualize
    </Button>
  );
};

// This is the actual component that is called by the VisualizationMenu component. It contains both the dropdown and the button that the user uses to choose their visualization/analysis.
const DataChoiceInput = () => {
  return (
    <>
      <Container className="text-center vh-50 d-flex flex-row justify-content-center">
        <DataDropdown />
        <UserDropdown />
        <SelectButton />
      </Container>
    </>
  );
};
export default DataChoiceInput;
