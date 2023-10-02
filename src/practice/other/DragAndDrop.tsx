import { useContext } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { AlertContext } from '../../contexts/Contexts';

const DragAndDrop = () => {

    const alphabets = [
        { id: 1, letter: 'A' },
        { id: 2, letter: 'B' },
        { id: 3, letter: 'C' },
        { id: 4, letter: 'D' },
    ]

    function handleOnDragEnd(result: any) {

    }

    const { message } = useContext(AlertContext);
    return (
        <DragDropContext onDragEnd={(result) => handleOnDragEnd(result)}>
            <p> {message} </p>
            <Droppable droppableId="alphabets">
                {(provided) => (
                    <div className="py-36 px-96"
                        {...provided.droppableProps}
                        ref={provided.innerRef}>
                        {alphabets.map(({ id, letter }, index) => {
                            return (
                                <Draggable key={id.toString()} draggableId={id.toString()} index={id}>
                                    {(provided) => (
                                        <div key={id} className="border p-3 bg-slate-400" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}> {letter} </div>
                                    )}
                                </Draggable>
                            )
                        })}
                    </div>
                )}
            </Droppable>
        </DragDropContext >
    )
}

export default DragAndDrop;