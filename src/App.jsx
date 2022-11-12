import Home from './components/sections/Home'
import Navbar from './components/sections/Navbar'
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

      <div>Features</div>

      <div>Resume</div>
    </div>
  )
}

export default App
