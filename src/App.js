import * as React from "react";
import "react-bootstrap";
import { BrowserRouter, Route, Routes, useNavigate, Link } from "react-router-dom";
import "./App.css";
import AddCabinet from "./components/admin/AddCabinet";
import AddEquipment from "./components/admin/AddEquipment";
import CabinetDetails from "./components/admin/CabinetDetails";
import Login from "./components/login";
import Cabinets from "./pages/cabinets";
import Dashboard from "./pages/dashboard";
import Equipments from "./pages/equipments";
import MyEquipments from "./pages/myequipments";
import Profile from "./pages/profile";
import Requisition from "./pages/requisitions";
import AddUser from "./components/admin/AddUser";
import FAQ from "./components/Faq";
import Logout from "./components/logout";
import { Switch } from "@mui/material";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/equipments" element={<Equipments />}></Route>
          <Route
            path="/equipments/addEqipments"
            element={<AddEquipment />}
          ></Route>
          <Route path="/cabinets" element={<Cabinets />}></Route>
          <Route path="/requisitions" element={<Requisition />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/myequipments/" element={<MyEquipments />}></Route>

          <Route
            path="/equipments/addEqipments"
            element={<AddEquipment />}
          ></Route>
          <Route path="/cabinets/addCabinets" element={<AddCabinet />}></Route>
          <Route
            path="/cabinets/cabinetDetails"
            element={<CabinetDetails />}
          ></Route>
          <Route path="/profile/addUser" element={<AddUser />}></Route>
          <Route path="/faq" element={<FAQ />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
