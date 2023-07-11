import { styled } from "styled-components";
import NavBar from "./navBar";
import NavMenu from "./navMenu";
import { Outlet } from "react-router-dom";
import FotterComponent from "../fotter/Fotter";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
`;

function TheApp() {
  return (
    <AppContainer>
      <NavBar />
      <NavMenu />
      <main>
        <Outlet />
      </main>
      <FotterComponent />
    </AppContainer>
  );
}

export default TheApp;
