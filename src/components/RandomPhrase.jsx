import React from 'react'

const RandomPhrase = ({ quote }) => {

  console.log(quote)

  const { author, phrase } = quote

  return (
    <div className='container-phrase'>
      <p className='phrase'>{phrase}</p>
      <p className='fuente'>Fuente: {author} </p>
    </div>
  )
}

export default RandomPhrase