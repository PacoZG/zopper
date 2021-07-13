import React from "react"; // { useEffect, useState }
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Plan from "./components/Plan";
import HomePage from "./components/HomePage";
// import axios from "axios";

const App = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
  //     setPosts(response.data);
  //   });
  // }, [setPosts]);

  return (
    <div className="w-screen ">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/plans/basic">
            <Plan plan="Basic" />
          </Route>
          <Route path="/plans/standard">
            <Plan plan="Standard" />
          </Route>
          <Route path="/plans/premium">
            <Plan plan="Premium" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
