import { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { addcircle, close } from '../assets'
import { data } from '../constants'

const DragDropSkills = () => {
  const [skills, setSkills] = useState([])
  const [showAdd, setShowAdd] = useState(false)
  const [skillInp, setSkillInp] = useState('')
  const [repeatSkill, setRepeatSkill] = useState(false)

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }

  const Send = (e) => {
    e.preventDefault()
    setRepeatSkill(false)
    const checkSkill = skills.find(
      (d) => d.name === skillInp.toLocaleLowerCase()
    )
    if (checkSkill?.name === skillInp.toLocaleLowerCase()) {
      setRepeatSkill(true)
      return
    }

    const addSkill = data.find((d) => d.name === skillInp.toLocaleLowerCase())
    addSkill && setSkills([...skills, addSkill])
    setSkillInp('')
  }
  return (
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
      <div className="my-5">
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
          <form onSubmit={Send}>
            <input
              type="search"
              list="skillsdata"
              className="outline-none pl-1 bg-secondary/50 w-full"
              value={skillInp}
              onChange={(e) => setSkillInp(e.target.value)}
            />
          </form>
          <img
            src={close}
            alt="close"
            className="w-5 h-5 bg-red-500 rounded-full p-1 ml-2"
            onClick={() => setShowAdd(!showAdd)}
          />
        </div>
        <p
          className={`${
            !repeatSkill ? 'hidden' : 'flex'
          } bg-red-300 justify-center mx-4 mt-2 rounded-md`}
        >
          Skill already added
        </p>

        <datalist id="skillsdata">
          <option value="JavaScript" />
          <option value="C++" />
          <option value="React" />
          <option value="Laravel" />
          <option value="Vue" />
          <option value="Android" />
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
                    className="text-red-500 rounded-lg relative"
                  >
                    <img
                      src={d.icon}
                      alt={d.icon}
                      className="w-10 h-10 cursor-move"
                    />
                    <img
                      src={close}
                      alt=""
                      className="w-10 h-10 p-2 hover:bg-white/50 absolute top-0 left-0 opacity-0 hover:opacity-100 hover:duration-500"
                      onClick={() => {
                        setSkills((prev) => {
                          const arr = [...prev]
                          arr.splice(i, 1)
                          return arr
                        })
                      }}
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
  )
}

export default DragDropSkills
