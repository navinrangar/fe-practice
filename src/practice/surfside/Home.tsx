import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import ResetPassword from "./components/ResetPassword";

const Home = () => {

    return (
        <div className="bg-gray-100">
            <div className="flex gap-x-10 h-screen justify-center items-center ">
                <Login />
                <ForgotPassword/>
                <ResetPassword/>
            </div>
        </div>
    )
}

export default Home;