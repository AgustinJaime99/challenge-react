import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "wouter";

import Navbar from "./components/Navbar/index";
import Home from "./pages/Home";
import SearchPage from "./pages/Search";
import Detail from "./pages/Detail";
import LoginPage from "./pages/Login";
import NotFound from "./pages/404";

import { UserContextProvider } from "./context/UserContext";
import { HeroContextProvider } from "./context/HeroContext";
import { TeamContextProvider } from "./context/TeamContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App-main">
        <Suspense fallback={null}>
          <section className="App-content">
            <Navbar />
            {/* header con logo y link a home */}
            <HeroContextProvider>
              <TeamContextProvider>
                <Switch>
                  <Route component={Home} path="/" />
                  <Route component={SearchPage} path="/search" />
                  <Route component={Detail} path="/hero/:id" />
                  <Route component={LoginPage} path="/login" />
                  <Route component={NotFound} path="/404" />
                  <Redirect to="/404" />
                </Switch>
              </TeamContextProvider>
            </HeroContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

export default App;
