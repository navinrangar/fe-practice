import CustomButton from "./CustomButton";

const ForgotPassword = () => {

    return (
        <div className="bg-gray-100">
            <div className="flex flex-col h-screen justify-center items-center ">
                <img src="/logo192.png" height="70px" width="80px" />
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl text-center"> Forgot Password </h1>
                    <p className="mt-5 font-semibold text-gray-600"> Please provide your email address and we'll send you <span className="flex flex-col text-center"> a link to reset your password.</span></p>
                    <div className="flex flex-col mt-5 bg-white p-8 rounded-md">
                        <label className="font-semibold text-gray-600"> Email Address </label>
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="border-solid border-2 rounded-md mt-1 h-9 pl-4 text-sm mb-6"
                            autoComplete="false"
                        />
                        <CustomButton text="Submit" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;