import { useRef, useContext, useState } from 'react'
import ConfigResume from './ConfigResume'
import DragDropSkills from '../DragDropSkills'
import DataContext from '../DataContext'
import Photo from '../Photo'
import { github, linkedin } from '../../assets'

const Resume = () => {
  const componentRef = useRef()
  const textRef = useRef()
  const [githubInp, setGithubInp] = useState('')
  const [linkedinInp, setLinkedinInp] = useState('')
  const [webInp, setWebInp] = useState('')
  const { fontAboutMe, fontName, showgit, showlinkedin, showWebsite } =
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

            <div className=" mt-5">
              <input
                type="text"
                className="w-full outline-none focus:bg-slate-200 focus:rounded pl-1"
                placeholder="Address"
              />
              <input
                type="text"
                className="w-full outline-none focus:bg-slate-200 focus:rounded pl-1"
                placeholder="Phone"
              />

              <div className="mt-1">
                <input
                  type="text"
                  className="text-sm w-full outline-none focus:bg-slate-200 focus:rounded pl-1"
                  placeholder="Email"
                />
                <a
                  href={webInp}
                  contentEditable
                  suppressContentEditableWarning
                  className={`${showWebsite ? 'flex' : 'hidden'}`}
                  value={webInp}
                  onChange={(e) => setWebInp(e.target.value)}
                >
                  <input
                    type="text"
                    className="text-sm w-full outline-none focus:bg-slate-200 focus:rounded pl-1"
                    placeholder="Website"
                  />
                </a>
              </div>

              <div className={`${(showgit || showlinkedin) && 'mt-3'}`}>
                <div
                  className={`${
                    showgit ? 'flex' : 'hidden'
                  }  items-center gap-1`}
                >
                  <img src={github} alt="github" className="w-5" />
                  <a
                    href={githubInp}
                    contentEditable
                    suppressContentEditableWarning
                    className="flex"
                  >
                    <input
                      type="text"
                      placeholder="github.com"
                      className="w-full text-xs outline-none focus:bg-slate-200 focus:rounded pl-1"
                      value={githubInp}
                      onChange={(e) => setGithubInp(e.target.value)}
                    />
                  </a>
                </div>
                <div
                  className={`${
                    showlinkedin ? 'flex' : 'hidden'
                  } mt-1 items-center gap-1`}
                >
                  <img src={linkedin} alt="linkedin" className="w-5" />
                  <a
                    href={linkedinInp}
                    contentEditable
                    suppressContentEditableWarning
                    className="flex"
                  >
                    <input
                      type="text"
                      placeholder="linkedin.com"
                      className="w-full text-xs outline-none focus:bg-slate-200 focus:rounded pl-1"
                      value={linkedinInp}
                      onChange={(e) => setLinkedinInp(e.target.value)}
                    />
                  </a>
                </div>
              </div>
            </div>

            <DragDropSkills />

            <div className="mt-6 w-full">
              <h1 className="text-sm font-semibold inline-flex bg-red-300">
                EDUCATION
              </h1>
              <input
                type="text"
                placeholder="University"
                className="text-base w-full mt-1 font-bold outline-none focus:bg-slate-200 focus:rounded pl-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
