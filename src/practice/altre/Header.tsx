const Header = () => {
    
    return (
        <div className="sticky bg-white pt-5 px-72 flex justify-between shadow-xl pb-5">
            <img className="w-10 sm:w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1024px-Android_logo_2019_%28stacked%29.svg.png"/>
            <li className="flex gap-6 pt-8 text-lg text-gray-600 font-bold cursor-pointer">
                <ul className="hover:text-pink-600 active:text-yellow-500 hover:border-b-2 hover:border-red-500 pb-3"> <a href="#services"> Services </a></ul>
                <ul className="hover:text-pink-600 active:text-yellow-500 hover:border-b-2 hover:border-red-500 pb-3"> <a href="#sectors"> Sectors </a></ul>
                <ul className="hover:text-pink-600 active:text-yellow-500 hover:border-b-2 hover:border-red-500 pb-3"> <a href="#about"> About </a></ul>
                <ul className="hover:text-pink-600 active:text-yellow-500 hover:border-b-2 hover:border-red-500 pb-3"> <a href="#contact"> Contact </a></ul>
            </li>

        <div className="flex gap-5 pt-7">
            <p className=" font-sans text-gray-600 pt-1"> Need Help? info@altre.co.in </p>
            <button className="px-4 bg-red-400 text-white h-9"> List Your Property </button>
            </div>
        </div>
    )
}

export default Header;