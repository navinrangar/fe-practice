import { memo, useEffect } from "react"
import { connect } from "react-redux"
import { State } from "../../../showfinder-store"
import { showFetchList } from "../actions/showfinder"
import { Show } from "../models/showfinder"
import { searchQuerySelector, showListSelector } from "../selectors/showfinder"
import ShowRow from "./ShowRow"

interface Props {
    searchQuery: string
    showList: Show[]
    getShowList: (query: string) => void
}

const ShowList = ({ searchQuery, showList, getShowList }: Props) => {

    return (
        <div className="p-5 space-y-5">
            <input className="border-2 border-black" type={"text"} value={searchQuery} onChange={(event) => getShowList(event?.target.value)}/>
            <h1> Your favourite shows!</h1>
            {showList.map((pt: any, index: number) => {
                return (
                    <div className="mt-5">
                    <ShowRow key={index} show={pt}/>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (s: State) => ({
    showList: showListSelector(s),
    searchQuery: searchQuerySelector(s),
})

const mapDispatchToProps = {
    getShowList: showFetchList,
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(ShowList));