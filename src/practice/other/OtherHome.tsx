import { Link } from 'react-router-dom'

function OtherHome() {
    return (
        <div className="flex flex-end justify-center h-screen w-full">
        <div className="flex flex-col items-center justify-center h-screen gap-5">
            <p className="font-bold text-4xl"> Where do you want to go? </p>
            <div className="flex gap-5">
                <Link className="text-xl hover:underline" to="/other/dnd"> DnD </Link>
                <Link className="text-xl hover:underline" to="/other/login"> Login </Link>
            </div>
        </div>
        </div>
    )
}

export default OtherHome