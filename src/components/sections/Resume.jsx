import { useState, useEffect, useRef } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { useReactToPrint } from 'react-to-print'
import {
  addcircle,
  camera,
  close,
  github,
  laravel,
  react,
  vue,
} from '../../assets'

const Resume = () => {
  const componentRef = useRef()
  const [skills, setSkills] = useState(data)
  const [selectedFile, setSelectedFile] = useState('')
  const [preview, setPreview] = useState('')
  const [sizeTextArea, setSizeTextArea] = useState(3)
  const [showAdd, setShowAdd] = useState(false)

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    setPreview(URL.createObjectURL(selectedFile))
  }, [selectedFile])

  return (
    <>
      <div
        id="resume"
        className="bg-white w-full h-[1000px] mt-5"
        ref={componentRef}
      >
        <div className="flex flex-col border-b px-24">
          <input
            type="text"
            placeholder="Your name"
            contentEditable
            suppressContentEditableWarning
            spellCheck="false"
            className="w-full outline-none text-center focus:bg-slate-200 focus:rounded-lg text-6xl font-abril p-2 caret-red-500"
          />
          <textarea
            cols="10"
            rows={sizeTextArea}
            placeholder="About me"
            className="text-center text-lg resize-none font-poppins text-gray-500 mb-3 overflow-hidden outline-none focus:bg-slate-200 focus:rounded-lg"
          ></textarea>
        </div>
        <div className="px-10 flex mt-5">
          <div className="w-full bg-gray-300 p-3">Work Experience</div>

          <div className="w-[275px] flex flex-col p-3">
            <div className="h-[120px] w-[120px] bg-zinc-500 rounded-full overflow-hidden relative group">
              <input
                type="file"
                id="user-image"
                className="w-0 h-0 opacity-0"
                onChange={onSelectFile}
                name="user-image"
                value=""
              />
              <label htmlFor="user-image">
                <img
                  className={`w-full h-full absolute top-0 left-0 object-cover cursor-pointer hover:opacity-80 rounded-full`}
                  src={preview}
                ></img>
                <div
                  className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center text-white duration-300 group-hover:opacity-100
                ${preview ? 'opacity-0' : 'opacity-80'}`}
                >
                  <img src={camera} alt="camera" className="w-6 h-6" />
                  <p className="text-xs text-center">SELECT PICTURE</p>
                </div>
              </label>
            </div>
            <p className="mt-5">Bostom, MA</p>
            <p>(555) 123-4567</p>
            <input
              type="text"
              className="w-full text-sm"
              placeholder="stacy.abrams@gmail.com"
            />
            <input
              type="text"
              className="w-full text-sm"
              placeholder="http://stacyabrams.com"
            />
            <p
              contentEditable
              className="mt-3 flex items-center text-xs outline-none focus:bg-slate-200 focus:rounded-lg gap-2"
            >
              <img src={github} alt="github" className="w-5" />
              Link Here!!
            </p>
            <div>
              <DragDropContext
                onDragEnd={(res) => {
                  const { source, destination } = res
                  if (!destination) return
                  if (
                    source.index === destination.index &&
                    source.droppableId === destination.droppableId
                  )
                    return

                  setSkills((prev) =>
                    reorder(prev, source.index, destination.index)
                  )
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
                    className={`flex items-center mt-2 ${
                      showAdd ? 'flex' : 'hidden'
                    } `}
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
                              className="tak-item text-red-500 rounded-lg"
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
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-7">
        <button
          className="bg-green-500 py-1.5 px-5 rounded-full flex items-center gap-2"
          onClick={handlePrint}
        >
          <span>
            <svg
              version="1.1"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
            >
              <title>download</title>
              <path d="M13 8v-6h-6v6h-5l8 8 8-8h-5zM0 18h20v2h-20v-2z"></path>
            </svg>
          </span>
          Print
        </button>
      </div>
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

export default Resume
