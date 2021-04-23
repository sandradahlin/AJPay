import './App.css';
import {Container, Typography} from '@material-ui/core'
import {ImageM} from './components/Image/Image'
import Logo from './assets/logo/android-chrome-192x192.png'
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <ImageM src={Logo} alt="AjPay"></ImageM>
        <Login/>

      </Container>
    </div>
  );
}

export default App;
