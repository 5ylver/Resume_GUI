import PropTypes from 'prop-types'

const Button = ({ text, variant }) => {
  const buttonStyle = `
    ${buttonBaseStyle}
    ${buttonVariantStyle[variant]}
  `
  return (
    <button type="button" className={buttonStyle}>
      {text}
    </button>
  )
}

const buttonBaseStyle = `
  py-2 
  px-6 
  font-poppins
  font-medium
  text-[18px]
  text-primary
  rounded-full
  outline-none
  hover:scale-90
  hover:ring-2 
  hover:ring-offset-4
  hover:ring-offset-primary
  duration-300
`
const buttonVariantStyle = {
  primary: `
    bg-blue-200
    hover:bg-blue-400
    hover:ring-blue-400 
  `,
  secondary: `
    bg-red-200
    hover:bg-red-400
    hover:ring-red-400 
  `,
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
}

export default Button
