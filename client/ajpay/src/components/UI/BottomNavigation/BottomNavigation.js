import {useContext} from 'react'
import {makeStyles, BottomNavigation as MuiBottomNavigation, BottomNavigationAction} from '@material-ui/core'
import { ExitToApp, Payment } from '@material-ui/icons';
import { Link as RouteLink } from "react-router-dom";
import {AuthContext} from '../../../context/auth-context'

const useStyles = makeStyles(() => ({
    root: { backgroundColor: "lightgrey"
    }
  }));

const BottomNavigation = (props) => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  let content = <></>;

  if(authContext.isAuth) 
    content = (
      <MuiBottomNavigation value="Recents" showLabels className={classes.root}>
        <BottomNavigationAction
          component={RouteLink}
          to="/pay"
          label="Pay"
          value="pay"
          icon={<Payment />}
        />
        <BottomNavigationAction
          component={RouteLink}
          to="/logout"
          label="Logout"
          value="logout"
          icon={<ExitToApp />}
        />
      </MuiBottomNavigation>
    );

  return content
};

export default BottomNavigation;
