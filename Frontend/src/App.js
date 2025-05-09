import "./App.css";
import AppNavbar from "./components/AppNavbar";
import VisualizationMenu from "./components/VisualizationMenu";
import "bootstrap/dist/css/bootstrap.min.css";
 import { BrowserRouter, Routes, Route } from "react-router";
import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
function App() {
  return (
    <BrowserRouter>
    <AppNavbar />
      <div className="app">
        <Container>
          <Row>
            <Col md={{span:6, offset:3}}>
        <Routes>
          <Route path="/" element={<VisualizationMenu />} />
        </Routes>
        </Col>
        </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
