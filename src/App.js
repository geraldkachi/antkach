import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import LayoutPage from "./components/LayoutPage";
import PaginationPage from "./components/PaginationPage";
import PaginationComponent from "./components/paginationComponent/PaginationComponent";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LayoutPage} />
        <Route path="/paginate" component={PaginationPage} />
        <Route path="pagenext" component={PaginationComponent} />
      </Switch>
    </div>
  );
}

export default App;
