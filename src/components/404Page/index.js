import React from 'react'
import './index.scss'

const ErrorPage = () => {
  return (
    <div className='section'>
        <div className='error-container'>
            <div className='error-text'>
                <h1>Error</h1>
                <h1>404</h1>
                <h3>Page Not Found</h3>

                <button><a href="/">Go Back</a></button>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage
