import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "../components/UI/AppBar/AppBar";
import BottomNavigation from "../components/UI/BottomNavigation/BottomNavigation";

const Layout = (props)=> {
    const theme = useTheme();

    return (
        <>  
            { useMediaQuery(theme.breakpoints.up("sm")) ? <AppBar navItems = {props.navItems}/> : (<></>)}
            {props.children}
            { useMediaQuery(theme.breakpoints.down("xs"))? <BottomNavigation navItems = {props.navItems}/> : (<></>)}
        </>
    )
}

export default Layout