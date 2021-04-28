import './App.css';
import {useContext} from 'react'
import {Container} from '@material-ui/core'
import {ImageM} from './components/Image/Image'
import Logo from './assets/logo/android-chrome-192x192.png'
import Login from './containers/Auth/Login/Login'
import Registration from './containers/Auth/Registration/Registration'
import { Switch, Route, Redirect } from 'react-router-dom'
import {AuthContext} from './context/auth-context'

function App() {
  const authContext = useContext(AuthContext)
  let routes = (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <Redirect to="/login"/>
    </Switch> 
  )

  if(authContext.isAuth) {
    console.log("isAuthed")
    routes = (
      <Switch>
        <Route path="pay" render={()=> {return <div>logged in!</div>}} />
        <Redirect to="/pay"/>
      </Switch> 
    )
  }    

  return (
    <div className="App">
      <Container maxWidth="sm">
      <ImageM src={Logo} alt="AjPay"></ImageM>
      {routes}   
        
      </Container>
    </div>
  );
}

export default App;
