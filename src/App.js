import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
