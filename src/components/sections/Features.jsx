import { useState } from 'react'
import { resume } from '../../assets'

function Features() {
  const [showImg, setImg] = useState(false)
  return (
    <>
      <div id="features" className="flex justify-center mb-24">
        <img
          src={resume}
          alt="resume"
          className="h-80 cursor-pointer"
          onClick={() => setImg(true)}
        />
      </div>

      {showImg && (
        <div className="flex justify-center items-center fixed inset-0 z-50">
          <div className="w-auto mx-auto max-w-3xl">
            <div className="rounded-lg bg-white">
              <div className="flex items-start justify-between p-1 border-b border-solid border-slate-200 rounded-t">
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setImg(false)}
                >
                  <span className=" text-black h-6 w-6 text-2xl block ">×</span>
                </button>
              </div>
              <div className="">
                <img src={resume} alt="resume" className="h-[800px] w-full" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Features
