import React from 'react'
import '../styles/Home.css'
import HomeData from "../../HomeData.json"

export default function Home() {
  


  return (
    <>
      <main>
        <h1>Cross Site Scripting-Attack</h1>
        <p className='main-p'>Identify Attack By <span className='movementtext'> Cyber Ai</span></p>

        <div className="grid-container">

          {
            HomeData.map((data, i)=>{
              return (
                <div key={i} className={data.classname}>
                  <h2>{data.heading}</h2>
                  <p className={data.para_class_name}>{data.para}</p>
                  <button>{data.btndata}</button>
                </div>
              )
            })
          }
  
         
        </div>
      </main>
    </>
  )
}
