import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LayoutPage from "./components/LayoutPage";
import PaginationPage from "./components/PaginationPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LayoutPage} />
        <Route path="/paginate" component={PaginationPage} />
      </Switch>
    </div>
  );
}

export default App;
