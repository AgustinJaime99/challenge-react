import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "wouter";

import Navbar from "./components/Navbar/index";
import Home from "./pages/Home";
import SearchPage from "./pages/Search";
import Detail from "./pages/Detail";
import LoginPage from "./pages/Login";

import { UserContextProvider } from "./context/UserContext";
import { HeroContextProvider } from "./context/HeroContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App-main">
        <Suspense fallback={null}>
          <section className="App-content">
            <Navbar />
            {/* header con logo y link a home */}
            <HeroContextProvider>
              <Switch>
                <Route component={Home} path="/" />
                <Route component={SearchPage} path="/search" />
                <Route component={Detail} path="/hero/:id" />
                <Route component={LoginPage} path="/login" />
                <Redirect to="/404" />
              </Switch>
            </HeroContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

export default App;
