import {Outlet} from "react-router-dom";
import Header from "./ui/Header.jsx";
import SideBar from "./ui/SideBar.jsx";
import styled from "styled-components";

const Main = styled.main`

`
const Div = styled.div`
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr ;
    height: 100vh;

`


const App = () => {
 return (
  <Div className="grid ">
   <Header/>
   <SideBar/>
  <Main className="bg-gray-50 p-10">
   <Outlet/>
  </Main>
  </Div>
 );
};

export default App;
