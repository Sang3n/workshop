import React from 'react'
import { useParams } from 'react-router-dom'

function DyanmicPage  ()  {
    const {id}= useParams()
  return (
    <div>
        <div >

            <h1 className='text-5xl text-center'> This is ths dynamic page</h1>
        </div>
    </div>
  )
}

export default DyanmicPage
