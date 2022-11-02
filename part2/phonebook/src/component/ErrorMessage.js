import React from 'react';

const ErrorMessage = ({message}) => {

    if (message === null) {
        return null
      }
  
      const errorMessageStyle = {
          color: 'red',
          background: 'lightgrey',
          fontSize: 20,
          borderStyle: 'solid',
          borderRadius: 5,
          padding: 10,
          marginBottom: 10
      }
  
      return (
        <div style={errorMessageStyle}>
          {message}
        </div>
      )
}


export default ErrorMessage