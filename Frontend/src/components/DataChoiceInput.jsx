import { React, useState } from "react";
import { Button, Container } from "react-bootstrap";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "react-bootstrap";

// This is the dropdown that the user interacts with in order to select their visualization.
const DataDropdown = ({ onSelect }) => {
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };

  const handleVisualize = () => {
    if (dropdownValue) {
      onSelect(dropdownValue);
    }
  };
return(
    <>
    <handleDropdownChange />
    <dropdownValue />
    </>
)
};

const UserDropdown = ({ onDropdownChange, handleDropdownChange, dropdownValue }, handleVisualize) => {
    return (
      <>
        <Dropdown value={dropdownValue} onChange={handleDropdownChange}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {dropdownValue || "Select Visualization"}
          </Dropdown.Toggle>
          <DropdownMenu>
            <Dropdown.Item
              onClick={() => onDropdownChange("Histogram")}
              href="#/action-1"
            >
              Histogram
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => onDropdownChange("Bar Graph")}
              href="#/action-2"
            >
              Bar Graph
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => onDropdownChange("Heatmap")}
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
