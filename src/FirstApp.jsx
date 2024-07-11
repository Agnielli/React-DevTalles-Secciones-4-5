import PropTypes from 'prop-types';

const newMessage = {
  name: 'Enrique',
  message: 'Hola Mundo',
};

const getResult = (a, b) => a + b


export const FirstApp = ({
  title, 
  subTitle, 
}) => {
  
  const { message, name } = newMessage

  if (!title) {
    throw new Error('No existe el titulo')
  }

  return (
    <>
      <h1>{ title }</h1>
      <h3>{ subTitle }</h3>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}

      <p>{ getResult(6, 4) }</p>
      <p>{ message }</p>
    </>
  )
} 

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
  title: 'Enrique Sabariego',
  subTitle: 'No hay subtitulo',
  name: 'No name',
}
