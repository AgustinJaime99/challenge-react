import React, { Suspense } from "react";
import { Route, Switch } from "wouter";

import Navbar from "./components/Navbar/index";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import LoginPage from "./pages/Login";

import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <div className="App-main">
        <Suspense fallback={null}>
          <section className="App-content">
            <Navbar />
            {/* header con logo y link a home */}
            <Switch>
              <Route component={Home} path="/" />
              <Route component={Search} path="/asd" />
              <Route component={Detail} path="/hero/:id" />
              <Route component={LoginPage} path="/login" />
            </Switch>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

export default App;
