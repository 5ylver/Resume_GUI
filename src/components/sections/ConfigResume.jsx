import { useContext, useState } from 'react'
// import PropTypes from 'prop-types'
import { useReactToPrint } from 'react-to-print'
import DataContext from '../DataContext'
import { chevron, print } from '../../assets'

// eslint-disable-next-line react/prop-types
const ConfigResume = ({ componentRef }) => {
  const [openOption, setOpenOption] = useState({
    op1: true,
    op2: false,
    op3: true,
  })
  const { op1, op2, op3 } = openOption
  const {
    setFontAboutMe,
    fontAboutMe,
    fontName,
    setFontName,
    setShowgit,
    showgit,
    showlinkedin,
    setShowlinkedin,
    showWebsite,
    setWebsite,
  } = useContext(DataContext)

  const handlePrint = useReactToPrint({
    // eslint-disable-next-line react/prop-types
    content: () => componentRef.current,
  })

  return (
    <div className="flex flex-col h-screen w-[350px] bg-primary rounded-2xl">
      <div className="flex flex-col px-9 flex-1 overflow-auto">
        <h2 className="text-white text-center my-7 font-poppins text-2xl border border-secondary rounded-lg p-1 mb-3">
          Configure Resume
        </h2>
        <div
          className="flex items-center gap-4 whitespace-nowrap text-white/70 pl-6 pr-2 py-4 rounded-3xl text-lg font-extralight hover:text-white hover:bg-white/10"
          onClick={() => setOpenOption({ ...openOption, op1: !op1 })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          Your name
          <img
            src={chevron}
            alt="cc"
            className={`w-6 h-6 ml-auto ${op1 && '-rotate-90'}`}
          />
        </div>
        <div
          className={`${
            op1 ? 'flex' : 'hidden'
          } flex-col relative py-2 before:content-[''] before:block before:absolute before:inset-0 before:top-4 before:bottom-4 before:right-auto before:ml-[2.3rem] before:bg-secondary before:w-[1px]`}
        >
          <div className="flex items-center gap-4 pl-[4rem] py-3 text-base">
            <span className="text-white">Font-size:</span>
            <select
              onChange={(e) =>
                setFontName({ ...fontName, size: e.target.value })
              }
              className="outline-none rounded"
              value={fontName.size}
            >
              <option value="5xl">48px</option>
              <option value="6xl">60px</option>
              <option value="7xl">72px</option>
              <option value="8xl">96px</option>
              <option value="9xl">128px</option>
            </select>
          </div>

          <div className="flex items-center gap-4 pl-[4rem] py-3 text-base">
            <span className="text-white">Font-family:</span>
            <select
              onChange={(e) =>
                setFontName({ ...fontName, family: e.target.value })
              }
              className="outline-none rounded"
              value={fontName.family}
            >
              <option value="abril">Abril</option>
              <option value="poppins">Poppins</option>
            </select>
          </div>
        </div>
        <div
          className="flex items-center gap-4 whitespace-nowrap text-white/70 pl-6 pr-2 py-4 rounded-3xl text-lg font-extralight hover:text-white hover:bg-white/10"
          onClick={() => setOpenOption({ ...openOption, op2: !op2 })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          About me
          <img
            src={chevron}
            alt="cc"
            className={`w-6 h-6 ml-auto ${op2 && '-rotate-90'}`}
          />
        </div>
        <div
          className={`${
            op2 ? 'flex' : 'hidden'
          } flex-col relative py-2 before:content-[''] before:block before:absolute before:inset-0 before:top-4 before:bottom-4 before:right-auto before:ml-[2.3rem] before:bg-secondary before:w-[1px]`}
        >
          <div className="flex items-center gap-4 pl-[4rem] py-3 text-base">
            <span className="text-white">Font-size:</span>
            <select
              onChange={(e) =>
                setFontAboutMe({ ...fontAboutMe, size: e.target.value })
              }
              className="outline-none rounded"
              value={fontAboutMe.size}
            >
              <option value="xs">12px</option>
              <option value="sm">14px</option>
              <option value="base">16px</option>
              <option value="lg">18px</option>
              <option value="xl">20px</option>
              <option value="2xl">24px</option>
            </select>
          </div>

          <div className="flex items-center gap-4 pl-[4rem] py-3 text-base">
            <span className="text-white">Font-family:</span>
            <select
              onChange={(e) =>
                setFontAboutMe({ ...fontAboutMe, family: e.target.value })
              }
              className="outline-none rounded"
              value={fontAboutMe.family}
            >
              <option value="abril">Abril</option>
              <option value="poppins">Poppins</option>
            </select>
          </div>
        </div>

        <div
          className="flex items-center gap-4 whitespace-nowrap text-white/70 pl-6 pr-2 py-4 rounded-3xl text-lg font-extralight hover:text-white hover:bg-white/10"
          onClick={() => setOpenOption({ ...openOption, op3: !op3 })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 512 512"
          >
            <path
              d="M208 352h-64a96 96 0 010-192h64M304 160h64a96 96 0 010 192h-64M163.29 256h187.42"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="36"
            />
          </svg>
          Link
          <img
            src={chevron}
            alt="cc"
            className={`w-6 h-6 ml-auto ${op3 && '-rotate-90'}`}
          />
        </div>
        <div
          className={`${
            op3 ? 'flex' : 'hidden'
          } flex-col relative py-2 before:content-[''] before:block before:absolute before:inset-0 before:top-4 before:bottom-4 before:right-auto before:ml-[2.3rem] before:bg-secondary before:w-[1px]`}
        >
          <div className="flex items-center gap-4 pl-[4rem] py-3 text-base text-white">
            <span>Website:</span>
            <div className="flex items-center">
              <label htmlFor="website" className="mx-2 text-sm font-medium">
                Show
              </label>
              <input
                id="website"
                type="checkbox"
                checked={showWebsite}
                onChange={() => setWebsite((prev) => !prev)}
                className="w-4 h-4 rounded accent-secondary"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 pl-[4rem] py-3 text-base text-white">
            <span>GitHub:</span>
            <div className="flex items-center">
              <label htmlFor="github" className="mx-2 text-sm font-medium">
                Show
              </label>
              <input
                id="github"
                type="checkbox"
                checked={showgit}
                onChange={() => setShowgit((prev) => !prev)}
                className="w-4 h-4 rounded accent-secondary"
              />
            </div>
          </div>
          <div className="flex items-center gap-4 pl-[4rem] py-3 text-base text-white">
            <span>Linkedin:</span>
            <div className="flex items-center">
              <label htmlFor="linkedin" className="mx-2 text-sm font-medium">
                Show
              </label>
              <input
                id="linkedin"
                type="checkbox"
                checked={showlinkedin}
                onChange={() => setShowlinkedin((prev) => !prev)}
                className="w-4 h-4 rounded accent-secondary"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-7">
        <button
          className="bg-green-500 py-3 px-3 rounded-full"
          onClick={handlePrint}
        >
          <img src={print} alt="print" className="w-7" />
        </button>
      </div>
    </div>
  )
}

// ConfigResume.propTypes = {
//   componentRef: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.shape({ current: PropTypes.instanceOf(ConfigResume) }),
//   ]),
// }

export default ConfigResume
