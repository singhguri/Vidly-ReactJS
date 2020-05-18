import React from "react";
import Movies from "./components/movies";
import "./App.css";
import { Route, Redirect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieDetails from "./components/movieDetails";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route path="/movies" component={Movies} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
