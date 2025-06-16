import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Owners from "./pages/Owners";
import Dogs from "./pages/Dogs";
import OwnerDetail from "./pages/OwnerDetail";
import DogDetail from "./pages/DogDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="owners" element={<Owners />} />
          <Route path="owners/:id" element={<OwnerDetail />} />
          <Route path="dogs" element={<Dogs />} />
          <Route path="owners/:ownerId/dogs/:dogId" element={<DogDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
