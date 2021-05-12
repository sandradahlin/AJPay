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
        <Container component="form" onSubmit={props.payHandler} align="center">
          <FormControl className={classes.root} autoComplete="off">
            <TextField
                id="recipient"
                type="text"
                required
                autoFocus
                label="Recipient"
                variant="outlined"
                // inputRef={props.loginRef}
                InputProps = {{endAdornment:
                    <InputAdornment position="end">
                      <IconButton
                        color="primary"
                        aria-label="pick recipient"
                        onClick={(event)=>{props.addRecipientHandler(event)}}
                        // onMouseDown={(event)=>{props.addRecipientHandler(event)}}
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
                autoFocus
                label="Message"
                variant="outlined"
                inputRef={props.messageRef}
                onChange={props.changeValueHandler("message")}
            />
          </FormControl>

          <Button variant="contained" color="primary" type="submit" fullWidth>Send</Button>
        </Container>
      </Container>
    );
}

export default PayForm;