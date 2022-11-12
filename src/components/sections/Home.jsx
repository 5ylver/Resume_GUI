import Button from '../Button'
import { TypeText } from '../TypeText'
import { card } from '../../assets'
import { styles } from '../../styles/style'

const Home = () => {
  const words = [' in just minutes.', ' & download in PDF.']

  return (
    <section
      id="home"
      className={`flex flex-col md:flex-row ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 text-white`}
      >
        <h1 className="font-abril text-5xl ss:text-7xl leading-[70px] ss:leading-tight">
          5ylver <br /> Resume Builder
        </h1>

        <p className="text-2xl font-thin font-abril">
          Create a resume
          <TypeText words={words} loop={3} />
        </p>
        <div className="my-12 mx-auto sm:mx-0">
          <Button variant="secondary" text="Create resume" />
        </div>
      </div>

      <div className={`flex-1 ${styles.flexCenter} px-16`}>
        <img src={card} alt="card" className="w-[100%] xs:w-[75%] h-[100%]" />
      </div>
    </section>
  )
}

export default Home
