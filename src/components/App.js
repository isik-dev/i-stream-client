import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      This is a good approach of navigating!
      <br />
      This is page 1<Link to="/pagetwo">Go to page two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      This is a bad approach of navigating!
      <br />
      This is page 2<button>Click Me!</button>
      <a href="/">Go to page one</a>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </div>
    </BrowserRouter>
  );
};

export default App;
