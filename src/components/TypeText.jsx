import PropTypes from 'prop-types'
import { Typewriter } from 'react-simple-typewriter'

export const TypeText = ({ words, loop }) => {
  return (
    <span className="font-thin font-abril text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5CE1E6]">
      <Typewriter
        words={words}
        loop={loop}
        cursor
        cursorStyle="*"
        cursorColor="#5CE1E6"
        typeSpeed={200}
        deleteSpeed={70}
        delaySpeed={1000}
      />
    </span>
  )
}

TypeText.propTypes = {
  words: PropTypes.array.isRequired,
  loop: PropTypes.number.isRequired,
}
