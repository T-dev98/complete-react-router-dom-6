import { Outlet } from "react-router-dom";
import StyledNavbar from "../components/styledNavbar";

const SharedLayout = () => {
    return(
        <>
        <StyledNavbar />
        <Outlet />
        </>
    )
}
export default SharedLayout;