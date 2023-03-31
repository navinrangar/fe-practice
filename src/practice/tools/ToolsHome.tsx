import { Link } from "react-router-dom";

const ToolsHome = () => {
    return (
        <div className="flex flex-end justify-center h-screen w-full">
            <div className="flex flex-col items-center justify-center h-screen gap-5">
                <p className="font-bold text-4xl"> Where do you want to go? </p>
                <div className="flex gap-5">
                    <Link className="text-xl hover:underline" to="/tools/excel-to-json"> xlToJson </Link>
                    <Link className="text-xl hover:underline" to="/tools/lexicon"> Lexicon </Link>
                    <Link className="text-xl hover:underline" to="/tools/calci"> Calci </Link>
                    <Link className="text-xl hover:underline" to="/tools/timer"> Timer </Link>
                </div>
            </div>
        </div>
    )
}

export default ToolsHome;