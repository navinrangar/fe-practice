import { memo } from "react";
import ShowList from "./ShowList";

const ShowFinderHome = () => {
    return (
        <div>
            <h1>ShowFinderHome</h1>
            <ShowList/>
        </div>
    )
}

export default memo(ShowFinderHome);