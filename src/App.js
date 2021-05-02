import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Employee from "./pages/Employee";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/employee-directory" component={Employee} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
