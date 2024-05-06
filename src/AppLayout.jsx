import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import styled from "styled-components";
const StyledAppLayout = styled.div`
  background-color: var(--colot-pink-soft-bg);
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
