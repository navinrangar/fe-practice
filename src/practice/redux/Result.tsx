import { useDispatch, useSelector } from "react-redux";
import { FAIL_INCREMENTED, PASS_INCREMENTED } from "./actions/actions";
import { failSelector, passSelector } from "./selectors/selectors";

const Result = () => {
    const dispatch = useDispatch();

    const failIncrement = () => {
        const failAction = { type: FAIL_INCREMENTED }
        dispatch(failAction);
    }

    const passIncrement = () => {
        const passAction = { type: PASS_INCREMENTED }
        dispatch(passAction);
    }

    const failCount = useSelector(failSelector);
    const passCount = useSelector(passSelector);


    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-4">
                <button className="bg-red-400 px-8 py-4 rounded-md" onClick={() => failIncrement()}> Fail+1 </button>
                <button className="bg-green-400 px-8 py-4 rounded-md" onClick={() => passIncrement()}> Pass+1 </button>
            </div>
            <div className="flex gap-7 justify-center">
                <p> failed: {failCount}</p>
                <p> passed: {passCount}</p>
            </div>
        </div>
    )
}

export default Result;