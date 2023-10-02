import { useForm } from "../../../hooks/useForm"
import DragAndDrop from "../DragAndDrop";
import { useState } from "react";
import { createContext } from "react";


function Login() {

  const { value, setForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    setForm(e);
  }

  const [alertMessage, setAlertMessage] = useState('You are right!');
  const defaultValues = { message: alertMessage, setMessage: setAlertMessage};
  const AlertContext = createContext(defaultValues);


  return (
    <AlertContext.Provider value={defaultValues}>
      <p className="bg-red-400">{alertMessage}</p>
      <form className="flex flex-col p-5 gap-2">
        <div className="flex flex-col relative mt-5 ">
          <input className="border peer placeholder-transparent " id="name" name="name" type='text' value={value.name} placeholder=" Your Name" onChange={(e) => handleSubmit(e)} />
          <label className="absolute -top-8 peer-placeholder-shown:text-base peer-placeholder-shownd:text-gray-400 peer-placeholder-shown:top-0.5 transition-all" htmlFor="name"> Your Name </label>
        </div>
        <input className="border" name="email" type='email' value={value.email} onChange={(e) => handleSubmit(e)} />
        <input className="border" name="password" type='password' value={value.password} onChange={(e) => handleSubmit(e)} />
        <button onSubmit={handleSubmit} className="border"> Okay, done!</button>
      </form>
      <DragAndDrop />
    </AlertContext.Provider>
  )
}

export default Login