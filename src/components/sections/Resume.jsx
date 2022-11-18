import { useRef, useContext } from 'react'
import ConfigResume from './ConfigResume'
import DragDropSkills from '../DragDropSkills'
import DataContext from '../DataContext'
import Photo from '../Photo'
import { github, linkedin } from '../../assets'

const Resume = () => {
  const componentRef = useRef()
  const textRef = useRef()
  const { fontAboutMe, fontName, showgit, showlinkedin } =
    useContext(DataContext)

  const onChangeText = (e) => {
    const target = e.target
    textRef.current.style.height = 'auto'
    textRef.current.style.height = `${target.scrollHeight}px`
  }

  return (
    <section className="flex flex-row pt-20">
      <div className="ml-3">
        <ConfigResume componentRef={componentRef} />
      </div>

      <div
        id="resume"
        className="bg-white w-[1000px] h-[1000px] mx-auto"
        ref={componentRef}
      >
        <div className="flex flex-col border-b px-24">
          <input
            type="text"
            placeholder="Your name"
            spellCheck="false"
            className={`w-full text-${fontName.size} outline-none text-center focus:bg-slate-200 focus:rounded-lg mt-2 caret-secondary`}
          />
          <textarea
            rows={1}
            ref={textRef}
            onChange={onChangeText}
            placeholder="About me"
            spellCheck="false"
            className={`text-center text-${fontAboutMe.size} font-${fontAboutMe.family} resize-none text-gray-500 mb-3 overflow-hidden outline-none focus:bg-slate-200 focus:rounded-lg caret-secondary`}
          />
        </div>

        <div className="px-10 flex mt-5">
          <div className="w-full bg-gray-200 p-3"></div>

          <div className="w-[275px] flex flex-col p-3">
            <Photo />

            <input
              type="text"
              className="w-full mt-5 outline-none focus:bg-slate-200 focus:rounded-lg pl-1"
              placeholder="Address"
            />
            <input
              type="text"
              className="w-full outline-none focus:bg-slate-200 focus:rounded-lg pl-1"
              placeholder="Phone"
            />
            <input
              type="text"
              className="text-sm w-full mt-1 outline-none focus:bg-slate-200 focus:rounded-lg pl-1"
              placeholder="Email"
            />
            <input
              type="text"
              className="text-sm w-full outline-none focus:bg-slate-200 focus:rounded-lg pl-1"
              placeholder="Website"
            />
            <div
              className={`${
                showgit ? 'flex' : 'hidden'
              } mt-3 items-center gap-1`}
            >
              <img src={github} alt="github" className="w-5" />
              <input
                type="text"
                className="text-xs w-full outline-none focus:bg-slate-200 focus:rounded-lg pl-1"
                placeholder="github.com"
              />
            </div>
            <div
              className={`${
                showlinkedin ? 'flex' : 'hidden'
              } mt-1 items-center gap-1`}
            >
              <img src={linkedin} alt="linkedin" className="w-5" />
              <input
                type="text"
                className="text-xs w-full outline-none focus:bg-slate-200 focus:rounded-lg pl-1"
                placeholder="linkedin.com"
              />
            </div>

            <DragDropSkills />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
