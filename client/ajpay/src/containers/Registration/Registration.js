import {useState, useEffect, useRef} from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import {checkValidity} from '../../shared/validation'

const Registration = ()=> {
    
    const [enteredEmail, setEnteredEmail ] = useState("")
    const [emailError, setEmailError] = useState(false)
    const emailRef = useRef() 
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if( enteredEmail === emailRef.current.value) {
                console.log(enteredEmail)
                if(checkValidity(enteredEmail, {isEmail: true})){
                    console.log("Is valid Email format!")    
                            
                    //ask back-end for availability

                    setEmailError(false) 
                }
                else {
                    if(enteredEmail.length > 0)
                        setEmailError(true)
                }          
            }
        }, 500)
        return ()=>{ clearTimeout(timer) }
    }, [enteredEmail, emailRef])

    const [enteredPass, setEnteredPass ] = useState("")
    const [passError, setPassError ] = useState(false)
    const passwordRef = useRef() 
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if( enteredPass === passwordRef.current.value) {
                console.log(enteredPass)
                if(checkValidity(enteredPass, {minLength: 8}) && checkValidity(enteredPass, {maxLength: 128 })) {
                    console.log("Password length ok")
                    setPassError(false)
                }                    
                else 
                setPassError(true)
                
            }
        }, 500)
        return ()=>{ clearTimeout(timer) }
    }, [enteredPass, passwordRef])

    const [enteredPassConfirm, setEnteredPassConfirm ] = useState("")
    const [passConfirmError, setPassConfirmError ] = useState(false)
    const passwordConfirmRef = useRef() 
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if( enteredPassConfirm === passwordConfirmRef.current.value) {
                console.log(enteredPassConfirm + ", "  + passwordRef.current.value)
                if( enteredPassConfirm !== passwordRef.current.value ) {
                    console.log("Password does not match!")
                    setPassConfirmError(true)
                }                    
                else {
                    console.log("Password matches!")
                    setPassConfirmError(false)
                }
            }
        }, 500)
        return ()=>{ clearTimeout(timer) }
    }, [enteredPassConfirm, passwordConfirmRef, passwordRef])

    const submitHandler = (event)=> {
        event.preventDefault();
        //submit to backend
    }

    return (
        <RegistrationForm submit={submitHandler}
         emailRef={emailRef} emailHandler={setEnteredEmail} emailError= {emailError}
         passwordRef={passwordRef}  passwordHandler={setEnteredPass} passError= {passError}
         passwordConfirmRef={passwordConfirmRef}  passwordConfirmHandler={setEnteredPassConfirm} passConfirmError={passConfirmError}
         />
    )
}

export default Registration