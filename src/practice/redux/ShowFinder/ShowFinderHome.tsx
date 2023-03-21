import { memo, useEffect } from "react";
import ShowList from "./ShowList";

const ShowFinderHome = () => {

    useEffect(() => {
        document.title = "show-finder"
    }, [])


    return (
        <div className="flex flex-col mt-4 ml-6">
            <h1 className="font-bold">ShowFinderHome</h1>
            <ShowList />
        </div>
    )
}

export default memo(ShowFinderHome);