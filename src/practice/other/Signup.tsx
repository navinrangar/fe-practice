import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';

const Signup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSignup = (e:any) => {
        e.preventDefault();
        if(email && password)
        createUserWithEmailAndPassword(auth, email, password,)
        .then((userCredential) => {
            const user = userCredential.user;
             navigate("/");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            console.log('em', errorMessage);
            if(errorCode === 'auth/email-already-in-use')
            setErrorMessage(`This email already has an account. Please login instead.`)
            console.log('errorMessage', errorMessage)
        });
       
    }

    function onEmailChange(e:any) {
        e.preventDefault();
        setEmail(e.target.value);
    }

    function onPasswordChange(e:any) {
        e.preventDefault();
        setPassword(e.target.value);
    }

    return (
        <div className='flex flex-col items-center justify-center h-screen gap-6'>
            <p className='text-red-500'> {errorMessage} </p>
            <h1> Signup for fe-practice!</h1>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-3'>
                <label> Email </label>
                <input type={"email"} onChange={(e) => onEmailChange(e)} />
                </div>

                <div className='flex gap-3'>
                <label> Password </label>
                <input type={"password"} onChange={(e) => onPasswordChange(e)}/>
                </div>
                <button type="submit" onClick={(e) => onSignup(e)}> Sign up!</button>
                <p> already have an account? Please login <a className="hover:underline" href='/'> here </a></p>
            </div>
        </div>
    )
}

export default Signup;
