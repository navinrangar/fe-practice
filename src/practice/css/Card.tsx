const Card = () => {

    return (
        <div className="p-36 bg-gray-200 h-screen">
            <div className="flex flex-col bg-white w-1/3 h-96 justify-between rounded-md">
                <div className="bg-pink-100 p-5">
                    <img className="w-14 p-5 rounded-md bg-indigo-400 -mt-12" src="https://www.transparentpng.com/thumb/telephone/black-telephone-png-icon-photo-13.png" />
                    <h1 className="mt-4 text-xl font-bold"> Sales </h1>
                    <p className="mt-4 text-md font-semibold"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veritatis minima blanditiis non laboriosam necessitatibus voluptas, nam, illum cum iusto quam. Quae, labore rerum vel qui voluptatum quod repudiandae laborum. </p>
                </div>
                <a className="p-5 text-md font-bold text-indigo-400 bg-yellow-100 rounded-b-md" href="https://google.com"> Contact Now- </a>
            </div>
        </div>
    )
}

export default Card;