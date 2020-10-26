
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Post from "./component/AllPost/Post/Post";

function App() {
  
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path = '/'>
          <Post></Post>
         </Route>
         <Route exact path = "/postDetail/">

         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
