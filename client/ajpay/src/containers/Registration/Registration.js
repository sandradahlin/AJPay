import {useState, useEffect, useRef} from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import {checkValidity} from '../../shared/validation'

const Registration = ()=> {

    const [enteredEmail, setEnteredEmail ] = useState("")
    const emailRef = useRef() 
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if( enteredEmail === emailRef.current.value) {
                console.log(enteredEmail)
                if(checkValidity(enteredEmail, {isEmail: true})){
                    console.log("Is valid Email format!")                    
                    //ask back-end for availability
                }                
            }
        }, 500)
        return ()=>{ clearTimeout(timer) }
    }, [enteredEmail, emailRef])

    const [enteredPass, setEnteredPass ] = useState("")
    const passwordRef = useRef() 
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if( enteredPass === passwordRef.current.value) {
                console.log(enteredPass)
                if(checkValidity(enteredPass, {minLength: 8}) && checkValidity(enteredPass, {maxLength: 128 }))
                    console.log("Password length ok")
                
            }
        }, 500)
        return ()=>{ clearTimeout(timer) }
    }, [enteredPass, passwordRef])

    const [enteredPassConfirm, setEnteredPassConfirm ] = useState("")
    const passwordConfirmRef = useRef() 
    useEffect(()=>{
        const timer = setTimeout(()=>{
            if( enteredPassConfirm === passwordConfirmRef.current.value) {
                console.log(enteredPassConfirm + ", "  + passwordRef.current.value)
                if( enteredPassConfirm !== passwordRef.current.value )
                    console.log("Password does not match!")
                else
                    console.log("Password matches!")
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
         emailRef={emailRef} emailHandler={setEnteredEmail}
         passwordRef={passwordRef}  passwordHandler={setEnteredPass}
         passwordConfirmRef={passwordConfirmRef}  passwordConfirmHandler={setEnteredPassConfirm}
         />
    )
}

export default Registration