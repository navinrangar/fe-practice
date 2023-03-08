import { getAuth, onAuthStateChanged, updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

const Navigation = () => {

    const [email, setEmail] = useState<any>('');
    const [photoUrl, setPhotoUrl] = useState<string>('');

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              const mail = user.displayName;
              setEmail(mail);

              console.log("uid", uid)
            } else {
              console.log("user is logged out")
            }
          });
         
    }, [])

    const user = auth.currentUser ? auth.currentUser : undefined;

   /* function updateUser() {
        updateProfile(user, {
            displayName: "navinrangar", photoURL: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          })
    } */

    return (
        <div className="flex flex-end items-end h-screen">
            {/* <p onClick={() => updateUser()}> Logged in as {email} </p> */}
            {/* <p onClick={updateUser}> <img className="w-9 rounded-full" src={photoUrl}/> </p> */}
        <div className="flex flex-col items-center justify-center h-screen gap-5">
            <p className="font-bold text-4xl"> Where do you want to go? </p>
            <div className="flex gap-5">
                <a className="text-xl hover:underline" href="/redux"> Redux </a>
                <a className="text-xl hover:underline" href="/altre"> Altre </a>
                <a className="text-xl hover:underline" href="/css"> CSS </a>
                <a className="text-xl hover:underline" href="/figma"> Figma </a>
                <a className="text-xl hover:underline" href="/js"> JS </a>
            </div>
        </div>
        </div>
    )
}

export default Navigation;