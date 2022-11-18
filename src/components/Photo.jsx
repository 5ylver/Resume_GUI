import { useEffect, useState } from 'react'
import { camera } from '../assets'

const Photo = () => {
  const [selectedFile, setSelectedFile] = useState('')
  const [preview, setPreview] = useState('')

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined)
      return
    }
    setSelectedFile(e.target.files[0])
  }

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }
    setPreview(URL.createObjectURL(selectedFile))
  }, [selectedFile])

  return (
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
          <p className="text-[10px] text-center">SELECT AN PICTURE</p>
        </div>
      </label>
    </div>
  )
}

export default Photo
