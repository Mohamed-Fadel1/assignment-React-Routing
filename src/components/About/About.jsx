
import React from 'react'


import style from './About.module.css'; 


export default function About() {
  return (
   <>
<div className= {`about text-center  ${style.about}`} >
<h1 className = "text-white">ABOUT COMPONENT</h1>  
<div className="container">
  <div className="row">
    <div className="col-md-6 pt-5">
      <p className = "text-white" >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
    <div className="col-md-6 pt-5">
      <p className= " text-white " >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
    </div>
  </div>
</div>
</div>
   </>
  )
}
