import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { addcircle, close, laravel, react, vue } from '../assets'

const DragDropSkills = () => {
  const [skills, setSkills] = useState(data)
  const [showAdd, setShowAdd] = useState(false)

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  return (
    <>
      <DragDropContext
        onDragEnd={(res) => {
          const { source, destination } = res
          if (!destination) return
          if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
          )
            return

          setSkills((prev) => reorder(prev, source.index, destination.index))
        }}
      >
        <div className="my-6">
          <h1 className="text-sm font-semibold inline-flex bg-red-300 group">
            TECHNICAL SKILLS
            <span className="hidden group-hover:flex bg-white">
              <img
                src={addcircle}
                alt="add"
                onClick={() => setShowAdd(!showAdd)}
                className={`w-5 h-5 ml-2 ${showAdd && 'hidden'}`}
              />
            </span>
          </h1>
          <div
            className={`flex items-center mt-2 ${showAdd ? 'flex' : 'hidden'} `}
          >
            <input
              type="search"
              list="skillsdata"
              className="outline-none pl-1 bg-red-100 w-full"
            />
            <img
              src={close}
              alt="close"
              className="w-5 h-5 bg-red-500 rounded-full p-1 ml-2"
              onClick={() => setShowAdd(!showAdd)}
            />
          </div>

          <datalist id="skillsdata">
            <option value="JavaScript" />
            <option value="C++" />
            <option value="React" />
            <option value="Laravel" />
            <option value="Vue" />
          </datalist>
        </div>

        <Droppable droppableId="skills" direction="horizontal">
          {(droppableProvider) => (
            <ul
              {...droppableProvider.droppableProps}
              ref={droppableProvider.innerRef}
              className="m-0 list-none pr-5 rounded-sm border inline-flex flex-row text-2xl"
            >
              {skills.map((d, i) => (
                <Draggable key={d.id} draggableId={d.id} index={i}>
                  {(draggableProvided) => (
                    <li
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                      ref={draggableProvided.innerRef}
                      className="text-red-500 rounded-lg"
                    >
                      <img
                        src={d.text}
                        alt={d.text}
                        className="w-10 h-10 cursor-move"
                      />
                    </li>
                  )}
                </Draggable>
              ))}
              {droppableProvider.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </>
  )
}

const data = [
  {
    id: '1',
    text: react,
  },
  {
    id: '2',
    text: laravel,
  },
  { id: '3', text: vue },
]

export default DragDropSkills
