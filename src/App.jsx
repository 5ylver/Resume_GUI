import { styles } from './styles/style'

const App = () => {
  return (
    <div className="bg-primary w-full text-white">
      <div className={`${styles.paddingX} ${styles.contentCenter}`}>NavBar</div>
      <div>Contents</div>
    </div>
  )
}

export default App
