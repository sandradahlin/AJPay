import { Link, FormLabel, FormGroup, TextField, FormControl, Divider, Typography, makeStyles  } from '@material-ui/core'
import {Link as RouteLink} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}))

const LoginForm = ()=> {
    const classes = useStyles();

    return (
        <form>
            <FormControl className={classes.root} autoComplete="off">
                <FormLabel component="label">                    
                    <Typography component="h3" variant="h3">Login</Typography>
                </FormLabel>
                <TextField id="login" type="text" required label="Login here" variant="outlined" />
                <TextField id="password" type="password" required label="Password" variant="outlined" />
                <Divider light />
                <RouteLink className="linkBtn" to="/registration">Register</RouteLink>
            </FormControl>
        </form>
    );
}

export default LoginForm