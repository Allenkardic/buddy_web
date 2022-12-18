import {
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
  createRoutesFromElements,
  createBrowserRouter,
  BrowserRouter,
} from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import ErrorPage from "../pages/errorPage";
import { PrivateRoute } from "./privateRoute";
import { SideBar } from "../components";

// function AppRoute() {
//   return (
//     <div className='app-container bg-light'>
//       {/* <Nav /> */}
//       <div className='container pt-4 pb-4'>
//         <Routes>
//           <Route
//             path='/'
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//           <Route path='/login' element={<Login />} />
//           <Route path='*' element={<Navigate to='/' />} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

function AppRoute() {
  const authUser = false;
  return (
    <div>
      {authUser && <SideBar />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              {/* <RoutesContainer /> */}
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route path='*' element={<Navigate to='/404' replace />} />
        <Route path='/404' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default AppRoute;
