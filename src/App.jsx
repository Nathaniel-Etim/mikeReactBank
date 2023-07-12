import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import TheApp from "./components/navComponent/Nav";
import HomeScreen from "./pages/homePage";
import AboutPage from "./pages/aboutPage/aboutPage";
import ContactPage from "./pages/contactPage/ContactPage";
import LoginPage from "./pages/loginPage/LoginPage";
import LoanPage from "./pages/loanpage/LoanPage";
import LogedInNavBar from "./components/logedinComponent/logedinNavBar/logedInNavBar";
import DashBoardContainer from "./components/homeDashboard/HomeDashboard";

// copy the loginComponent Folder
// copy the homeDashboard folder

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TheApp />}>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="Contact" element={<ContactPage />} />
        <Route path="Loan" element={<LoanPage />} />
      </Route>
      {/* route to the login page */}
      <Route path="Login" element={<LoginPage />} />

      {/* route to when user is logedin */}
      <Route path="logedIn" element={<LogedInNavBar />}>
        <Route path="userDashBoard" element={<DashBoardContainer />} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
