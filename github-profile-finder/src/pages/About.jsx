import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1 className="text-6xl mb-4">Github Finder</h1>
            <p className='mb-4 text-2xl font-light'>
                A React app to search GitHub profiles and see profile details. This
                project is part of the Udemy Course

            </p>
            <p className='text-lg text-gray-400'>
                Version <span className='text-white'>1.0.0</span>
            </p>
            <Link to="/" className='btn btn-primary btn-lg'>
                <FaHome className='mr-2' />
                Back To Home
            </Link>
        </div>
    )
}

export default About