import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetups";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<AllMeetups />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/NewMeetups" element={<NewMeetups />} />
    </Routes>
  );
}

export default App;
