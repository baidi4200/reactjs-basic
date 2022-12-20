import { Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/Layout";
import MainNavigation from "./components/Layout/MainNavigation";
import AllMeetups from "./pages/AllMeetups";
import Favourites from "./pages/Favourites";
import NewMeetups from "./pages/NewMeetups";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<AllMeetups />} />
        <Route path="/favorites" element={<Favourites />} />
        <Route path="/new-meetup" element={<NewMeetups />} />
      </Routes>
    </Layout>
  );
}

export default App;
