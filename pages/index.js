import React from 'react'
import Heading from '@/components/Heading'
import Quote from '@/components/Quote'
import RandomButton from '@/components/RandomButton'

const Index = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Heading />
      <Quote text={"dummy text"} />
      <RandomButton />
    </div>
  )
}

export default Index
