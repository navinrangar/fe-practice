import { Link } from "react-router-dom";

const ToolsHome = () => {
    return (
        <div className="flex flex-end justify-center h-screen w-full">
            <div className="flex flex-col items-center justify-center h-screen gap-5">
                <p className="font-bold text-4xl"> Where do you want to go? </p>
                <div className="flex gap-5">
                    <Link className="text-xl hover:underline" to="/tools/xlToJson"> xlToJson </Link>
                    <Link className="text-xl hover:underline" to="/tools/lexicon"> Lexicon </Link>
                    <Link className="text-xl hover:underline" to="/redux/calculator"> Calci </Link>
                </div>
            </div>
        </div>
    )
}

export default ToolsHome;