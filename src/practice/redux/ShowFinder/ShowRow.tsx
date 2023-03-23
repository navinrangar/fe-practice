import { useNavigate } from 'react-router';
import { Show } from '../models/showfinder';

interface Props {
    show: Show
    key: number
    query: string
}

const ShowRow = ({ show, key, query }: Props) => {
    const navigate = useNavigate();

    const showDetails = () => {
        navigate(`/redux/showfinder/shows/${show.id}/?q=${query}`);
    }

    return (
        <div key={key} className="flex items-stretch bg-gray-300 rounded-md gap-4 cursor-pointer" onClick={showDetails}>
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
        </div>
    )
}

export default ShowRow;