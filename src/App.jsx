
import React from "react";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter }  from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Team from "./components/Team";
import People from "./components/People";
import Contact from "./components/Contact";
function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
          <Route path="/" exact> 
            <Home/>
            <About />
            <Service />
            <Team />
            <People/>
            <Contact/>
          </Route>
     
      </BrowserRouter>
    </div>
   
  )
}
export default App;
