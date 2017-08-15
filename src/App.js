import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

// Components
import Header from "./components/shared/Header/Header.js";
import DashboardPage from "./components/DashboardPage/DashboardPage.js";

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Grid bsClass="container-full">
        <Header />
        <DashboardPage />
      </Grid>
    );
  }
}

export default App;
