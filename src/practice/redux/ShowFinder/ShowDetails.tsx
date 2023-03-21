import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, WithRouterProps } from "../../../hoc/withRouter";
import { State } from "../../../showfinder-store";
import { showDetailsFetch } from "../actions/showfinder";
import { Show } from "../models/showfinder"
import { showCastSelector, showEntitiesSelector, showLoadingSelector } from "../selectors/showfinder";
import { Actor } from "../models/actor";
import { showCastFetchAction } from "../actions/actors";

type Props = {
  show: Show
  actors: Actor[]
  fetchShow: (id: number) => void
  fetchShowCast: (showId: number) => void
  loading: boolean
} & WithRouterProps

const ShowDetails: FC<Props> = ({ show, fetchShow, actors, fetchShowCast, loading, params }) => {

  const showId = +params.id;
  useEffect(() => {
    fetchShow(showId)
    fetchShowCast(showId)
  }, [])

  return (
    <>
      {loading && <p> loading... </p>}
      {show &&
        <div className="p-4">
          <div className="flex items-stretch bg-gray-300 rounded-md gap-4 cursor-pointer">
            <div className='w-20 shrink-0'>
              {show.image &&
                <img className="w-full" src={show.image.medium || 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg'} />
              }</div>
            <div className='flex flex-col'>
              <p className='font-bold'>{show.name} </p>
              <p>{show.genres} </p>
              <p>{show.language} </p>
              <p>{show.rating.average} </p>
              <p
                dangerouslySetInnerHTML={{ __html: show.summary }} />
              <a href={show.url} target={'_blank'} className="p-2 my-2 bg-yellow-200 inline"> Watch Now! </a>
            </div>
            {actors && (
              <div className="flex gap-3 flex-wrap">
                {actors?.map((actor: Actor) =>
                (
                  <div key={actor.id}>
                    <p className="font-semibold"> {actor.name} </p>
                    <img src={actor.image.medium} className={"w-36 h-32"}/>
                  </div>
                ))}
              </div>)}
          </div>
        </div>
      }
    </>
  )
}

const mapStateToProps = (s: State, props: WithRouterProps) => {
  const showId = +props.params.id;

  return {
    show: showEntitiesSelector(s)[showId],
    loading: showLoadingSelector(s),
    actors: showCastSelector(s)[showId],
  }
}

const mapDispatchToProps = {
  fetchShow: showDetailsFetch,
  fetchShowCast: showCastFetchAction,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetails)));