import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, WithRouterProps } from "../../../hoc/withRouter";
import { State } from "../../../showfinder-store";
import { showDetailsFetch, showFetchList } from "../actions/showfinder";
import { Show } from "../models/showfinder"
import { showCastSelector, showEntitiesSelector, showListSelector, showLoadingSelector, showQuerySelector } from "../selectors/showfinder";
import { Actor } from "../models/actor";
import { showCastFetchAction } from "../actions/actors";
import { Link, useSearchParams } from "react-router-dom";

type Props = {
  show: Show
  actors: Actor[]
  fetchShow: (id: number) => void
  fetchShowCast: (showId: number) => void
  fetchShows: (q: string) => void
  loading: boolean
  prev?: string
  next?: string
  query: string
} & WithRouterProps

const ShowDetails: FC<Props> = ({ show, fetchShow, actors, fetchShowCast, fetchShows, loading, query, prev, next, params, search }) => {

  // const [search] = useSearchParams();

  const showId = +params.id;
  useEffect(() => {
    fetchShow(showId);
    fetchShowCast(showId);
  }, [params])

  useEffect(() => {
    const query = search.get("q");
    if (!show && query) {
      fetchShows(query);
    }
  }, [])


  return (
    <>
      {loading && <p> loading... </p>}
      {show &&
        <div className="flex flex-col p-3 gap-3">
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
                    <a href={actor.url} target={"_blank"}> <img src={actor.image?.medium} className={"w-36 h-32"} /></a>
                  </div>
                ))}
              </div>)}
          </div>
          <div className="flex justify-around">
            {prev && <Link className={"bg-red-500 p-1"} to={prev + `/?q=${query}`}> Previous </Link>}
            {next && <Link className={"bg-blue-500 p-1"} to={next + `/?q=${query}`}> Next </Link>}
          </div>
        </div>
      }
    </>
  )
}

const mapStateToProps = (s: State, props: WithRouterProps) => {
  const showId = +props.params.id;
  const shows = showListSelector(s);

  let prevShow, nextShow;

  for (let i = 0; i < shows.length; i++) {
    const show = shows[i];

    if (show.id === showId) {
      if (i + 1 < shows.length) {
        nextShow = shows[i + 1];
      }

      if (i > 0) {
        prevShow = shows[i - 1];
      }

      break;
    }
  }

  return {
    show: showEntitiesSelector(s)[showId],
    loading: showLoadingSelector(s),
    actors: showCastSelector(s)[showId],
    query: showQuerySelector(s),
    prev: prevShow && `/redux/showfinder/shows/${prevShow.id}`,
    next: nextShow && `/redux/showfinder/shows/${nextShow.id}`,
  }
}

const mapDispatchToProps = {
  fetchShow: showDetailsFetch,
  fetchShowCast: showCastFetchAction,
  fetchShows: showFetchList,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(memo(ShowDetails)));