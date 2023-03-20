import { Show } from '../models/showfinder';

interface Props {
    show: Show
    key: number
}

const ShowRow = ({ show, key }: Props) => {
    return (
        <div key={key} className="flex items-stretch bg-gray-300 rounded-md gap-4">
            <div className='w-20 shrink-0'>
                {show.image &&
                    <img className="w-full" src={show.image.medium || 'https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg'} />
                }</div>
            <div className='flex flex-col'>
                <p className='font-bold'>{show.name} </p>
                <p>{show.genres} </p>
                <p>{show.language} </p>
            </div>
        </div>
    )
}

export default ShowRow;