
interface Props {
    text: string
}

const CustomButton = (props: Props) => {

    return (
        <div>
            <button
                className="mt-3 rounded-md bg-blue-500 py-2 text-white font-bold w-full"
            >
                {props.text.toUpperCase()}
            </button>
        </div>
    )
}

export default CustomButton;