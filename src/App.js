import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About } from "./components";
import { GetTennis } from "./components/GetTennis";
import { CreateTennis } from "./components/CreateTennis";
import "./styles/app.scss"

function debounce() {
  let window_size_trigger = 575.98;

}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function App() {
  const size = useWindowSize();

  return (
    <div className="root">
      <Router>
          <Navigation/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path='/tennis/:id' component={GetTennis} />
            <Route path='/tennis/' component={CreateTennis} />
          </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

/*

  React.useEffect(() => {
    function update() {
      console.log(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', update);
    update();
    return () => window.removeEventListener('resize', update);
  })
  */