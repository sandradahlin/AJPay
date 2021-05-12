import { useState, useRef, useEffect } from 'react'
import PayForm from '../../components/PayForm/PayForm'
import {checkValidity} from '../../shared/validation'
const Pay = (props) => {

    const [values, setValue] = useState(
        {
            recipient: "",
            amount: 0,
            message: ""
        }
    );

    const recipient = useRef();
    const amount = useRef();
    const messageRef = useRef();

    useEffect(()=>{
        const timer = setTimeout(() => {
            if (values.message === messageRef.current.value) {
              if (checkValidity(messageRef.current.value, { maxLength: 5 })) {  
                // setMessageError(false);
              } else {
                // setMessageError(true);
              }
            }
          }, 500);
          return () => {
            clearTimeout(timer);
          };

    },[values.message, messageRef]);

    const payHandler = (event)=>{
        event.preventDefault();
        console.log("CheckPoint1")

        

        console.log(values)
    };
    const addRecipientHandler = (event)=>{
        event.preventDefault();
        console.log("CheckPoint2")
    };

    const changeHandler = (prop) => (event)=>{
        setValue({...values, [prop]: event.target.value})
    }

    return <PayForm payHandler = {payHandler} addRecipientHandler= {addRecipientHandler} values= {values} changeValueHandler= {changeHandler} messageRef={messageRef}/>
}

export default Pay;