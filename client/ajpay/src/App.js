import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Grid, Container, Typography } from "@material-ui/core";
import { ImageM } from "./components/Image/Image";
import Logo from "./assets/logo/android-chrome-192x192.png";
import Login from "./containers/Auth/Login/Login";
import Registration from "./containers/Auth/Registration/Registration";
import { AuthContext } from "./context/auth-context";
import Pay from './containers/Pay/Pay'
import Layout from './hoc/Layout'

function App() {
  const authContext = useContext(AuthContext);
  let routes = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Redirect to="/login" />
    </Switch>
  );

  if (authContext.isAuth) {
    routes = (
      <Switch>
        <Route path="/pay" render={() => {
            return <Pay/>;
          }}
        />
        <Route path="/logout" render ={() => {return <div>hej2</div>}} />
        <Redirect to="/pay" />
      </Switch>
    );    
  }

  return (
    <Container className="App">
      <Layout>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={3}
          style={{ paddingTop: "8px" }}
        >
          <Grid item>
            <ImageM src={Logo} alt="AjPay"></ImageM>
          </Grid>
          <Grid item>{routes}</Grid>
        </Grid>
      </Layout>
    </Container>
  );
}

export default App;
