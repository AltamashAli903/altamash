import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Surprise from "../pages/Surprise";
import SurpriseHub from "../pages/SurpriseHub";
import LoveLetter from "../pages/cards/LoveLetter";
import PrivateRoute from "./PrivateRoute";
import Memories from "../pages/cards/Memories";
import WhyILovesYou from "../pages/cards/WhyILoveYou";
import FinalLove from "../pages/cards/FinalPage"; 
export default function AppRoutes() {
  return (
    <BrowserRouter basename="/altamash/">
      <Routes>
        <Route path="/" element={<Login />} />
        
        <Route
          path="/surprise"
          element={
            <PrivateRoute>
              <Surprise />
            </PrivateRoute>
          }
        />
      <Route path="/surprise-hub" element={
            <PrivateRoute>
              <SurpriseHub />
            </PrivateRoute>
          } />
      <Route path="/love-letter" element={
            <PrivateRoute>
              <LoveLetter />
            </PrivateRoute>
          } />
  
      <Route path="/memories" element={
            <PrivateRoute>
              <Memories />
            </PrivateRoute>
          } />
      <Route path="/reasons" element={
            <PrivateRoute>
              <WhyILovesYou />
            </PrivateRoute>
          } />
      <Route path="/final" element={
            <PrivateRoute>
              <FinalLove />
            </PrivateRoute>
          } />

          <Route path="*" element={<Login />} />
      </Routes>

    </BrowserRouter>
  );
}