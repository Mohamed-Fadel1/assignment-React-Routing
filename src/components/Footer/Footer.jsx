import React from 'react'
import style from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className= {`${ style.footerBackground } py-5 `} >
    <div className="container py-4">
       <div className="row">
        <div className="col-md-4">
          <div className="item text-center">
          <h2 className= {`${style.itemColor}`} >LOCATION</h2>
            <p className= {`${style.itemColor}`}>2215 John Daniel Drive</p>
            <p className= {`${style.itemColor}`}>Clark, MO 65243</p>
          </div>
        </div>
        <div className="col-md-4">
         <div className="item text-center">
         <h2 className= {`${style.itemColor}`}> AROUND THE WEB</h2>
            <p className= {`${style.itemColor}`}>2215 John Daniel Drive</p>
         </div>
          
        </div>
        <div className="col-md-4">
<div className="item text-center">
<h2 className= {`${style.itemColor}`}>ABOUT FREELANCER</h2>
            <p className= {`${style.itemColor}`}>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
</div>
           
        </div>
       </div>
    </div>
    </footer>
    
 
  )
}
