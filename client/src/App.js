import './App.css';
import { Route } from "react-router-dom"
import Landing from "./blocks/landing/Landing"
import Home from "./blocks/home/Home"
import Activities from './blocks/activities/Activities';
import About from './blocks/about/About';
import Details from './blocks/details/Details';

function App() {
  return (
    <>
      <Route exact path="/">
        <Landing/>
      </Route>
      <Route exact path="/home">
        <Home/>
      </Route>
      <Route exact path="/countries/:id">
        <Details/>
      </Route>
      <Route exact path="/activities">
        <Activities/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
    </>
  );
}

export default App;
