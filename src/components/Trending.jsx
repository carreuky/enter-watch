import React from 'react'
import TrendingCrad from './TrendingCrad'

export default function Trending({data}) {
  return (
    <div><h1 className='text-4xl '>Trending</h1>
    <TrendingCrad data={data}/>
    </div>
  )
}
