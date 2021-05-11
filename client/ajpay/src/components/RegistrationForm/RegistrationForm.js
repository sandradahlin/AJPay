import {
  Container,
  Button,
  TextField,
  FormControl,
  Divider,
  Typography,
  makeStyles,
  FormHelperText,
  Backdrop,
  CircularProgress,
  Link
} from "@material-ui/core";
import { Link as RouteLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& > button.MuiButton-fullWidth": {
      width: "100%",
      margin: theme.spacing(1, "auto"),
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const RegistrationForm = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <Backdrop
        className={classes.backdrop}
        variant="outlined"
        open={props.working}
      >
        <CircularProgress />
      </Backdrop>
      <Typography component="h3" variant="h4" align="center">
            Registration
          </Typography>
      <Container component="form" align="center" onSubmit={props.submitHandler}>
        <FormControl className={classes.root} autoComplete="off">
          <div style={{ height: "2ch" }}>
            {props.registerError ? (
              <FormHelperText error>
                {" "}
                Registration failed. Please try again.{" "}
              </FormHelperText>
            ) : null}
          </div>
          <TextField
            id="email"
            type="text"
            required
            label="Email"
            variant="outlined"
            autoFocus
            error={props.emailError}
            inputProps={{ ref: props.emailRef }}
            onChange={(event) => {
              props.emailHandler(event.target.value);
            }}
          />
          <TextField
            id="password"
            type="password"
            required
            label="Password"
            variant="outlined"
            error={props.passError}
            inputProps={{ ref: props.passwordRef }}
            onChange={(event) => {
              props.passwordHandler(event.target.value);
            }}
          />
          <TextField
            id="password-confirm"
            type="password"
            required
            label="Confirm Password"
            variant="outlined"
            error={props.passConfirmError}
            inputProps={{ ref: props.passwordConfirmRef }}
            onChange={(event) => {
              props.passwordConfirmHandler(event.target.value);
            }}
          />
          <Button
            disabled={
              props.emailError || props.passError || props.passConfirmError
                ? true
                : false
            }
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Submit!
          </Button>
          <Divider light />
          <Link variant="button" align="center" underline="none" color="textPrimary" style={{margin: "0 auto"}} component={RouteLink} to="/login">
            Login
          </Link>
        </FormControl>
      </Container>
    </Container>
  );
};

export default RegistrationForm;
