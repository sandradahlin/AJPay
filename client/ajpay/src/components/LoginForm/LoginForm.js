import { FormLabel, FormGroup, TextField, FormControl, Divider, makeStyles  } from '@material-ui/core'

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
                <FormLabel component="label">Login</FormLabel>
                <TextField id="login" type="text" label="Login here" variant="outlined" />
                <TextField id="password" type="password" label="Password" variant="outlined" />
                {/* <Divider light /> */}
                <FormGroup>
                    {/* remember login */}
                </FormGroup>
            </FormControl>
        </form>
    );
}

export default LoginForm