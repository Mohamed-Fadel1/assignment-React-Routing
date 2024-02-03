import React from 'react' ;
import style from "./Contact.module.css"

export default function Contact() {
  return (
    <>
      <div className="contact text-center">
        <h2 className= { `h1 fw-bolder ${style.colorh1}` } > CONATCT SECTION </h2> ;
        <div className="inputs">
 <div className="inputUserName">
 <label htmlFor="userName"> </label>
       <input type="text" id='userName' placeholder='userName' className='form-control w-50 m-auto p-3 mt-3' />
       <div className="inputUserAge">
        <label htmlFor="userAge"></label>
        <input type="number" placeholder='userAge' className='form-control w-50 m-auto p-3 mt-3' />
       </div>
       <div className="inputUserEmail">
        <label htmlFor="userEmail"></label>
        <input type="email" placeholder='userEmail' className='form-control w-50 m-auto p-3 mt-3' />
       </div>
       <div className="inputUserPassowrd">
        <label htmlFor="userPassowrd"></label>
        <input type="password" placeholder='userPassowrd' className='form-control w-50 m-auto p-3 mt-3' />
       </div>
       <button className= {`btn  text-white my-3 ${ style.btn }`} >Send Messsage</button>
 </div>
        </div>
      </div>
    </>
  )
}
