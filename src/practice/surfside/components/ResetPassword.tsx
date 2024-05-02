import CustomButton from "./CustomButton";

const ResetPassword = () => {

    return (
        <div className="bg-gray-100">
            <div className="flex flex-col h-screen justify-center items-center ">
                <img src="/logo192.png" height="70px" width="80px" />
                <div className="flex flex-col">
                    <h1 className="font-bold text-2xl"> Reset Password </h1>
                    <div className="flex flex-col mt-5 bg-white p-8 rounded-md">
                        <label className="font-semibold text-gray-700"> New Password <span className="text-red-500 font-bold"> * </span> </label>
                        <input
                            type="password"
                            placeholder="New Password"
                            className="border-solid border-2 rounded-md mt-1 h-9 pl-4 text-sm"
                            autoComplete="false"
                        />
                        <label className="mt-3 font-semibold text-gray-700"> Confirm New Password <span className="text-red-500 font-bold"> * </span> </label>
                        <input
                            type="password"
                            placeholder="Confirm New Password"
                            className="border-solid border-2 rounded-md mt-1 h-9 pl-4 text-sm mb-4"
                            autoComplete="false"
                        />
                        <CustomButton text="Submit" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;