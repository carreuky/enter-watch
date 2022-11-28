import React from 'react'
import TrendingCrad from './TrendingCrad'

export default function Trending({data,inputText}) {
  return (
    <div className='mx-2'>
    <TrendingCrad data={data} inputText={inputText}/>
    </div>
  )
}
