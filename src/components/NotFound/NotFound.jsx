import React from 'react'
import hamada from "../../assets/images/notfound.jpg"

export default function NotFound() {
  return (
    <>
  <div className='text-center'>
  <h1>Oops !</h1>
  <h3>404 - PAGE NOT FOUND</h3>
<h3>We Couldn't Find The Page</h3>      <img src={ hamada } alt="" />
  </div>
    </>
  )
}
