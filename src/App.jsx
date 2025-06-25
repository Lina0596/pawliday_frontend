import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Owners from "./pages/Owners";
import OwnerUpadateForm from "./pages/OwnerUpadateForm";
import OwnerAddForm from "./pages/OwnerAddForm";
import Dogs from "./pages/Dogs";
import DogDetail from "./pages/DogDetail";
import DogUpdateForm from "./pages/DogUpdateForm";
import DogAddForm from "./pages/DogAddForm";

export default function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="owners" element={<Owners />} />
            <Route path="owners/add" element={<OwnerAddForm />} />
            <Route
              path="owners/:ownerId/update"
              element={<OwnerUpadateForm />}
            />
            <Route path="dogs" element={<Dogs />} />
            <Route path="dogs/:dogId" element={<DogDetail />} />
            <Route path="dogs/:dogId/update" element={<DogUpdateForm />} />
            <Route path="dogs/add" element={<DogAddForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}
