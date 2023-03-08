import { FacebookProvider, useLogin, LoginButton} from 'react-facebook';


const Design1 = () => {

    /**** react-facebook lib */
    const { login, status, isLoading, error } = useLogin();

    function handleSuccess(response:any) {
        console.log(response.status);
        console.log('res', response);
      }

                      
      function handleError(error:any) {
        console.log(error);
      }

    async function handleLogin() {
        try {
            const response = await login({
                scope: 'email',
            }).then((response:any) => {
                handleSuccess(response);
            });
        } catch (error: any) {
            console.log(error.message);
        }
    }

    return (
        <div>
            <div className="flex justify-between p-18">
                <h1 className="text-xl font-bold p-2"> Startup 3</h1>
                <li className="flex gap-10 p-2">
                    <ul> Home </ul>
                    <ul> Features </ul>
                    <ul> Blog </ul>
                    <ul> Shop </ul>
                    <ul> <p> Search </p></ul>
                </li>

                <div className="flex gap-5">
                    <p className="p-2"> Sign Up </p>
                    <button className="rounded-full px-5 py-2 bg-green-600 text-white"> Sign In </button>
                </div>
                <LoginButton
                    scope="email"
                    onError={handleError}
                    onSuccess={handleSuccess}
                >
                    Login via Facebook
                </LoginButton>
            </div>
            <div className="flex flex-col items-center gap-y-9 ">
                <h2 className="text-7xl text-blue-900 font-bold"> Startup Framework </h2>
                <p className="text-2xl w-1/3"> We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection! </p>
            </div>

            <div className="flex flex-col items-center gap-y-4 mt-18 ">
                <button className="p-5 rounded-full bg-green-600 text-white"> Purchase Now for $248 </button>
                <p className="text-green-600"> Learn More </p>
            </div>

        </div>
    )
}

export default Design1;