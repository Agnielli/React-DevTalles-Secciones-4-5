import PropTypes from 'prop-types';

const newMessage = {
  name: 'Enrique',
  message: 'Hola Mundo',
};

const getResult = (a, b) => a + b


export const FirsApp = ({
  title, 
  subTitle, 
}) => {
  
  const { message, name } = newMessage

  if (!title) {
    throw new Error('No existe el titulo')
  }

  return (
    <>
      <h1>{ name }</h1>
      <h2>{ title }</h2>
      <h3>{ subTitle }</h3>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}

      <p>{ getResult(6, 4) }</p>
      <p>{ message }</p>
    </>
  )
} 

FirsApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirsApp.defaultProps = {
  title: 'NO HAY TITLE',
  subTitle: 'No hay subtitulo',
  name: 'No name',
}
