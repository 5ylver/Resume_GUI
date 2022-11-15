import Navbar from './components/sections/Navbar'
import Home from './components/sections/Home'
import Features from './components/sections/Features'
import Resume from './components/sections/Resume'
import { styles } from './styles/style'

const App = () => {
  return (
    <div className="bg-primary w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Navbar />
      </div>

      <div className={styles.flexStart}>
        <div className="w-full">
          <Home />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <Features />
      </div>

      {/* No responsive for now */}
      <div className="bg-white/90 hidden lg:flex">
        <div className="w-full px-80">
          <Resume />
        </div>
      </div>
    </div>
  )
}

export default App
