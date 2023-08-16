import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import Posts from "./components/Posts";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" Component={User} exact />
        <Route path="/posts" Component={Posts} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
