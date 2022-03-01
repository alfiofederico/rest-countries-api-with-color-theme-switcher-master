import React from 'react'

const Country = () => {
  return (
    <div className="country">
      <div className="flag-conteiner">
        <img src="" alt="Flags" />
      </div>
      <div className="details">
        <h3 className="name">
          Name:
        </h3>
        <p>Population: {""}
        <span className='values'>Test</span>
        </p>
        <p>Region: {""}
        <span className='values'>Test</span>
        </p>
        <p>Capital: {""}
        <span className='values'>Test</span>
        </p>
      </div>
    </div>
  )
}

export default Country