import { Routes, Route } from "react-router-dom";

import "./App.css";
import MainNavigation from "./components/Layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetups";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<AllMeetups />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/new-meetup" element={<NewMeetups />} />
      </Routes>
    </div>
  );
}

export default App;
