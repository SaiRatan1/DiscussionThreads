import React from 'react'
import Question from './questioncard'
import Answer from './answercard'
import Navbar from './navbar'

function Homepage() {
    return (
        <div className='flex flex-col items-center  h-full bg-gray-50'>
            <Navbar/>
            <Question/>
            <Answer/>
        </div>
    )
}

export default Homepage