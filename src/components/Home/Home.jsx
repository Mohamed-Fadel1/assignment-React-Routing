import React from 'react'
import style from "./Home.module.css" 
import img from "../../assets/images/avataaars.svg"


export default function Home() {
  return (
    <>
<div className= {`home ${style.home}`} >
<div className= {`${style.item} item text-center`} >
<img src={ img } className= { style.sizeImg } alt="" />
<h2 className='text-white fw-bolder h1 py-4'>START FRAMEWORK</h2>
<p className='text-white py-4'>Graphic Artist - Web Designer - Illustrator</p>
</div>
</div>
    </>
  )
}
