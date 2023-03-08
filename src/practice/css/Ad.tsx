
const Ad = () => {

    return (
        <div className="p-5 bg-gray-50 items-stretch flex flex-col">
        <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex flex-col p-4 basis-0 grow shrink justify-center">
                <h1 className="text-yellow-300 font-bold text-3xl"> Data to enrich your <span className="text-pink-500 flex flex-col"> Online Business. </span></h1>
                <p className="text-black mt-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum dolore sit minima accusantium nam.
                    Neque, corporis. Repellendus iure a nostrum illum? Aliquam velit ratione illum. 
                    Quae ex tempora exercitationem nisi.</p>
                 <div className="flex flex-col gap-6 mt-8 sm:flex-row sm:bg-red-200">
                    <button className="bg-indigo-500 rounded-full text-black p-4"> Get Started </button>
                    <button className="border-2 border-black rounded-full p-4"> See Demo! </button>
                 </div>
            </div>
            <div className="flex-1 self-stretch">
            <img className="h-full w-full object-cover" src="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?w=740&t=st=1677235233~exp=1677235833~hmac=e700cc7529a36f6e099e66bc9056d9cd3303d5e6601d3756905b4baf9035648a"/>
            </div>
        </div>
        </div>
    )
}

export default Ad;