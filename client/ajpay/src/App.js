import './App.css';
import {Container, Typography} from '@material-ui/core'
import {ImageM} from './components/Image/Image'
import Logo from './assets/logo/android-chrome-192x192.png'
import Login from './containers/Login/Login'
import Registration from './containers/Registration/Registration'
import { Switch, Route, Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
      <ImageM src={Logo} alt="AjPay"></ImageM>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Redirect to="/login"/>
        </Switch>      
        
      </Container>
    </div>
  );
}

export default App;
