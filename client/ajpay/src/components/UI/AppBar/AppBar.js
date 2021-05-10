import {useContext} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
} from "@material-ui/core";
import { Link as RouteLink } from "react-router-dom";
import {AuthContext} from '../../../context/auth-context'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  group: {
    flexGrow: 1,
  },
}));

const AppBar = (props) => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  let content =  <></>;  

  if(authContext.isAuth)
  content = (
    <Container className={classes.root}>
      <MuiAppBar position="static">
        <Toolbar>
          <Container className={classes.group}>
            <Typography color="inherit" component={RouteLink} to="/pay">
              Pay
            </Typography>
          </Container>
          <Button color="inherit" component={RouteLink} to="/logout">
            Logout
          </Button>
        </Toolbar>
      </MuiAppBar>
    </Container>)

  return (
    content
  );
};

export default AppBar;
