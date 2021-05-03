import { Button, FormLabel, FormHelperText , TextField, FormControl, Divider, Typography, makeStyles, Backdrop, CircularProgress } from '@material-ui/core'
import {Link as RouteLink} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      '& > button.MuiButton-fullWidth': {
          width: '100%',
          margin: theme.spacing(1, 'auto')
      }
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    }
}))

const LoginForm = (props)=> {
    const classes = useStyles();

    return (
        <>
            <Backdrop className={classes.backdrop}  variant="outlined" open={props.working}>
                <CircularProgress />
            </Backdrop>
        <form onSubmit={props.loginHandler}>

            <FormControl className={classes.root} autoComplete="off">
                <FormLabel component="label">                    
                    <Typography component="h3" variant="h3" align="left">Login</Typography>
                </FormLabel>
                <div style={{height:'2ch'}}>
                    {props.loginError ?
                     <FormHelperText error> Login failed. Please try again.  </FormHelperText> :
                      null }
                    
                </div>
                <TextField id="login" type="text" required autoFocus label="Login here" variant="outlined" inputRef={props.loginRef} />
                <TextField id="password" type="password" required label="Password" variant="outlined" inputRef={props.passRef}/>
                <Button variant="contained" color="primary" type="submit" fullWidth >Login</Button>
                <Divider light />
                <RouteLink className="linkBtn" to="/registration">Register</RouteLink>
            </FormControl>
            {/* <div>see: {props.test.loading.toString()}</div>
            <div>see2: {props.test.authStarted.toString()}</div> */}
        </form>
        </>
    );
}

export default LoginForm