import { FormLabel, FormGroup, TextField, FormControl, Divider, Typography, makeStyles  } from '@material-ui/core'
import {Link as RouteLink} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}))

const RegistrationForm = (props)=> {
    const classes = useStyles();

    return (
        <form onSubmit={props.submitHandler}>
            <FormControl className={classes.root} autoComplete="off">
                <FormLabel component="label">
                    <Typography component="h3" variant="h3">Registration</Typography>
                </FormLabel>
                <TextField id="email" type="text" required label="Email" variant="outlined" autoFocus error={props.emailError}
                    inputProps={
                        {ref: props.emailRef}
                    } 
                    onChange={(event)=>{props.emailHandler(event.target.value)}} />
                <TextField id="password" type="password" required label="Password" variant="outlined" error={props.passError}
                    inputProps={
                        {ref: props.passwordRef}
                    }
                    onChange={(event)=>{props.passwordHandler(event.target.value)}} />
                <TextField id="password-confirm" type="password" required label="Confirm Password" variant="outlined" error={props.passConfirmError}
                    inputProps={
                        {ref: props.passwordConfirmRef}
                    }
                    onChange={(event)=>{props.passwordConfirmHandler(event.target.value)}} />
                <Divider light />
                <RouteLink className="linkBtn" to="/login">Login</RouteLink>
            </FormControl>
        </form>
    );
}

export default RegistrationForm