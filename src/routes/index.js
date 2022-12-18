import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import NotFound from "../pages/notFound";
import { PrivateRoute } from "./privateRoute";
import { SideBar } from "../components";

function AppRoute() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <SideBar />
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default AppRoute;
