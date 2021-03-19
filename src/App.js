import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Components/Home";
import CreateReview from "./Components/CreateReview";
import ReadReviews from "./Components/ReadReviews";

export default function OliverTakeHome() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:id/review">
            <CreateReview />
          </Route>
          <Route path="/products/:id/reviews">
            <ReadReviews />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
