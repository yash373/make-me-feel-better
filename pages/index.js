import React, { useEffect, useState } from 'react'
import Heading from '@/components/Heading'
import Quote from '@/components/Quote'
import RandomButton from '@/components/RandomButton'

const Index = ({data}) => {
  const quotes = data.quotes
  const [index,setIndex] = useState(0)

  const setQuoteRandom = () => {
    setIndex(Math.floor(Math.random() * 50))
  }

  useEffect(setQuoteRandom,[])

  return (
    <div className='flex flex-col h-screen'>
      <Heading />
      <Quote text={quotes[index]} />
      <RandomButton handleClick={setQuoteRandom} />
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://make-me-feel-better.vercel.app/api/getQuotes`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Index
