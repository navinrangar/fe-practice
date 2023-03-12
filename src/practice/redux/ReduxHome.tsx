import Result from "./Result";
import Todo from "./Todo/Todo";

const ReduxHome = () => {

    return (
        <div className="flex flex-end items-end h-screen">
        <div className="flex flex-col items-center justify-center h-screen gap-5">
            <p className="font-bold text-4xl"> Where do you want to go? </p>
            <div className="flex gap-5">
                <a className="text-xl hover:underline" href="/redux/todo"> Todo </a>
                <a className="text-xl hover:underline" href="/redux/users"> Users </a>
            </div>
        </div>
        </div>
    )
}

export default ReduxHome;