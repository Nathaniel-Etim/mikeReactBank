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
import ServicePage from "./pages/servicePage/servicePage";
import DashBoardContainer from "./components/homeDashboard/HomeDashboard";
import TransactionPage from "./pages/transactionPage/TransactionPage";
import UserProfile from "./pages/userProfile/userProfile";
import BeneficiariesContainer from "./components/beneficiaries/beneficiaries";
import TransaferPage from "./components/transfer/transaferContainer";
import Message from "./components/dashBoardMessage/message";
import HelpAndSupportComponent from "./components/homeDashboard/helpAndSupport";
import EditUserPassword from "./components/editPasswordPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<TheApp />}>
        <Route index element={<HomeScreen />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="Contact" element={<ContactPage />} />
        <Route path="Loan" element={<LoanPage />} />
        <Route path="Services" element={<ServicePage />} />
      </Route>

      {/* route to the login page */}
      <Route path="Login" element={<LoginPage />} />

      {/* route to when user is logedin */}
      <Route path="logedIn" element={<LogedInNavBar />}>
        <Route index element={<DashBoardContainer />} />
        <Route path="transactions" element={<TransactionPage />} />
        <Route path="userProfile" element={<UserProfile />} />
        <Route path="beneficiaries" element={<BeneficiariesContainer />} />
        <Route path="transfers" element={<TransaferPage />} />
        <Route path="messages" element={<Message />} />
        <Route path="help" element={<HelpAndSupportComponent />} />
        <Route path="editPass" element={<EditUserPassword />} />
      </Route>
    </>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
