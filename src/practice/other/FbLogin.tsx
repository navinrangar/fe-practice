import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
// import { Card, Image } from 'react-bootstrap';


function FbLogin() {


    const [login, setLogin] = useState(false);
    const [data, setData] = useState({name: '', email: ''});
    const [picture, setPicture] = useState('');


    const responseFacebook = (response: any) => {
        console.log(response);
        setData(response);
        // setPicture(response.picture.data.url);
        // if (response.accessToken) {
        //   setLogin(true);
        // } else {
        //   setLogin(false);
        // }
    }


    return (
        <div>
            {!login &&
                <p> You are not logged in!</p>
            }
            {login &&
                <p> You are logged in!</p>
            }

            {login &&
                <p> Hi {data.name} this is your {data.email} </p>

            }
        </div>

    );
}


export default FbLogin;