import {
    Button,
    Container,
    FormHelperText,
    TextField,
    FormControl,
    Divider,
    Typography,
    makeStyles,
    Backdrop,
    CircularProgress,
    Link,
    InputAdornment,
    IconButton
  } from "@material-ui/core";
  import {AddCircle} from '@material-ui/icons';
  import AddCircleIcon from '@material-ui/icons/AddCircle';
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
  
const PayForm = (props)=> {
    const payHandler = ()=>{};
    const addRecipientHandler = ()=>{}
    const classes = useStyles();
    return (
      <Container>
        {/* <Backdrop
          className={classes.backdrop}
          variant="outlined"
          open={props.working}
        >
          <CircularProgress />
        </Backdrop> */}
        <Typography component="h3" variant="h4" align="center">
          Pay
        </Typography>
        <Container component="form" onSubmit={payHandler} align="center">
          <FormControl className={classes.root} autoComplete="off">
            <TextField
                id="recipient"
                type="phone"
                required
                autoFocus
                label="Recipient"
                variant="outlined"
                // inputRef={props.loginRef}
                InputProps = {{endAdornment:
                    <InputAdornment position="end">
                      <IconButton
                        color="primary"
                        // aria-label="toggle password visibility"
                        onClick={addRecipientHandler}
                        onMouseDown={addRecipientHandler}
                      >
                        <AddCircleIcon/>
                      </IconButton>
                    </InputAdornment>}}
            />
            <Link align="left">New favorite</Link>
            <TextField
                id="amount"
                type="number"
                required
                autoFocus
                label="Amount"
                variant="outlined"
                // inputRef={props.loginRef}
            />
                <TextField
                id="message"
                type="text"
                required
                autoFocus
                label="Message"
                variant="outlined"
                // inputRef={props.loginRef}
            />
          </FormControl>

          <Button variant="contained" color="primary" type="submit" fullWidth>Send</Button>
        </Container>
      </Container>
    );
}

export default PayForm;