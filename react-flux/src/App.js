import React from "react";
import ListData from "./containers/ListData";
import sunImage from "./sun.png";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div>
      <head>
        <base href="/" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="styles.css" />
      </head>
      <nav class="navbar navbar-dark primary-color">
        <a class="navbar-brand" href="#">
          Link
        </a>
      </nav>
      <br />
      <header class="navbar navbar-inverse navbar-fixed-top" role="banner">
        <div class="navbar-header">
          <div class="container">
            <img alt="Brand" src={sunImage}  style={{float: "left",marginLeft: 100 +'px', width:40, height:40}}/>
            <a href="/" class="navbar-brand">
              Weather Data
            </a>
            <div class="container" />
          </div>
        </div>
      <Button>Aarhus</Button>
      <Select></Select>
      </header>
      <ListData />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <script src="index.js"></script>
    </div>
  );
}

export default App;
