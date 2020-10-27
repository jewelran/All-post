
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Post from "./component/AllPost/Post/Post";
import NotFound from "./component/NotFound/NotFound";
import PostDtail from "./component/PostDetail/PostDtail";

function App() {
  
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path = '/'>
          <Post></Post>
         </Route>
         <Route path = "/post">
           <PostDtail></PostDtail>
         </Route>
         <Route path = "*">
           <NotFound></NotFound>
         </Route>
         
       </Switch>
     </Router>
    </div>
  );
}

export default App;
