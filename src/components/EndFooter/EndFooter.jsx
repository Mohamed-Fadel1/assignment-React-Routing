
import React from 'react'
import style from "./EndFooter.module.css"

export default function EndFooter() {
  return (
    <>
      <div className= {`endFooter text-center py-3 ${style.endFooter}`} >
        <p className='text-white'> Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
