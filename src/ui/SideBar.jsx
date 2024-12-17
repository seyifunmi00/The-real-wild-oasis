import styled from "styled-components";
import Logo from "./Logo.jsx";
import MainNav from "./MainNav.jsx";

const StyledSidebar = styled.aside`
    grid-row: 1/-1;
`

const SideBar = () => {
 return (
  <StyledSidebar className="bg-gray px-10 py-4 border-r border-r-gray-200 flex flex-col gap-5">
   <Logo/>
   <MainNav/>
  </StyledSidebar>
 );
};

export default SideBar;
