import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";

const Navigation = () => {

  const [email, setEmail] = useState<any>('');
  const [photoUrl, setPhotoUrl] = useState<string>('');

  useEffect(() => {
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

  return (
    <div className="flex flex-end items-center h-screen">
      <div className="flex flex-col items-center justify-center h-screen gap-5 w-full">
        <p className="font-bold text-4xl"> Where do you want to go? </p>
        <div className="flex gap-5">
          <Link className="text-xl hover:underline" to="/redux"> Redux </Link>
          <Link className="text-xl hover:underline" to="/altre"> Altre </Link>
          <Link className="text-xl hover:underline" to="/surfside"> Surfside </Link>
          <Link className="text-xl hover:underline" to="/css"> CSS </Link>
          <Link className="text-xl hover:underline" to="/oops"> OOPs </Link>
          <Link className="text-xl hover:underline" to="/figma"> Figma </Link>
          <Link className="text-xl hover:underline" to="/games"> Games </Link>
          <Link className="text-xl hover:underline" to="/js"> JS </Link>
          <Link className="text-xl hover:underline" to="/tools"> Tools </Link>
          <Link className="text-xl hover:underline" to="/other"> Other </Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation;