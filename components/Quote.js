import React from 'react'

const Quote = ({ text }) => {
    return (
        <div className='flex mx-auto my-auto rounded-md text-2xl h-[40vh] bg-orange-200 md:w-[50%]'>
            <p className='mx-auto my-auto text-center w-[80%]'>
                {text}
            </p>
        </div>
    )
}

export default Quote
