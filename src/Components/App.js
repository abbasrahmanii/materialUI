import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./ui/Header";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>} />
          <Route exact path="/services" component={() => <div>services</div>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>custom software</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>mobile apps</div>}
          />
          <Route exact path="/website" component={() => <div>websites</div>} />
          <Route
            exact
            path="/the-revolution"
            component={() => <div>the-revolution</div>}
          />
          <Route exact path="/about-us" component={() => <div>about-us</div>} />
          <Route
            exact
            path="/contact-us"
            component={() => <div>contact-us</div>}
          />
          <Route
            exact
            path="/free-estimate"
            component={() => <div>free-estimate</div>}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
