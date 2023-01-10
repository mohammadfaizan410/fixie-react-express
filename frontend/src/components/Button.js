import React from 'react';
import '../styles/button.css'

function Button(props) {
  return (
      <button className='button' type={ props.type } style={{ backgroundColor: props.background }}>
          { props.value }
    </button>
  )
}

export default Button