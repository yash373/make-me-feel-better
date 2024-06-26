import React, { useEffect, useState } from 'react'
import Heading from '@/components/Heading'
import Quote from '@/components/Quote'
import RandomButton from '@/components/RandomButton'

const Index = ({ data }) => {
  const quotes = data.quotes
  const [index, setIndex] = useState(0)

  const setQuoteRandom = () => {
    setIndex(Math.floor(Math.random() * 50))
  }

  useEffect(setQuoteRandom, [])

  return (
    <div className='flex flex-col h-screen'>
      <Heading />
      <Quote text={quotes[index]} />
      <RandomButton handleClick={setQuoteRandom} />
      <audio loop className='mx-auto my-auto' controls src='https://ia804609.us.archive.org/2/items/close-eyes-slowed-reverb/Close%20Eyes%20%28Slowed%20%2B%20Reverb%29.mp3' />
    </div>
  )
}

export async function getServerSideProps() {
  const getData = async (link, headers) => {
    const res = await fetch(link,
      {
        method: "GET",
        headers: headers
      }
    )
    const data = await res.json()
    return data
  }

  // Fetch quotes
  const quotes = await getData(`https://make-me-feel-better.vercel.app/api/getQuotes`, {})
  // const songs = await getData(`https://customer.api.soundcharts.com/api/v2/chart/tiktok/music/weekly/ranking/latest?offset=0&limit=100"`, {
  //   'x-app-id': 'soundcharts',
  //   'x-api-key': 'soundcharts'
  // })

  // Pass data to the page via props
  return { props: { data: quotes } }
}

export default Index
