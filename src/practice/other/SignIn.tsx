import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { auth } from '../../firebase';

const Signup = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onSignIn = (e:any) => {
        e.preventDefault();
        if(email && password)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/navigation");
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            if(errorCode === 'auth/wrong-password')
            setErrorMessage('Either email is wrong or the password.');
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
            <h1> SignIn to fe-practice!</h1>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-3'>
                <label> Email </label>
                <input type={"email"} onChange={(e) => onEmailChange(e)} />
                </div>

                <div className='flex gap-3'>
                <label> Password </label>
                <input type={"password"} onChange={(e) => onPasswordChange(e)}/>
                </div>
                <button type="submit" onClick={(e) => onSignIn(e)}> Sign In!</button>
            </div>
            <p> don't have an account? create one <a className="hover:underline " href="/signup"> here </a></p>
        </div>
    )
}

export default Signup;
