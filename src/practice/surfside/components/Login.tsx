import CustomButton from "./CustomButton";

const Login = () => {

    return (
        <div className="bg-gray-100">
            <div className="flex flex-col h-screen justify-center items-center ">
                <img src="/logo192.png" height="70px" width="80px" />
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl"> Sign in to Your Account. </h1>
                    <div className="flex flex-col mt-5 bg-white p-8 rounded-md">
                        <label className="font-semibold"> Email <span className="text-red-500 font-bold"> * </span> </label>
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="border-solid border-2 rounded-md mt-1 h-9 pl-4 text-sm"
                            autoComplete="false"
                        />
                        <label className="mt-3 font-semibold text-gray-700"> Password <span className="text-red-500 font-bold"> * </span> </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border-solid border-2 rounded-md mt-1 h-9 pl-4 text-sm"
                            autoComplete="false"
                        />
                        <label className="mt-3 text-sm text-blue-500 font-semibold"> Forgot Password ? </label>
                        <CustomButton text="Login" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;