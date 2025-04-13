import React from 'react'
import '../styles/Home.css'
import HomeData from "../../HomeData.json"

export default function Home() {



  return (
    <>
      <main>
        <div className="sub-main">
          <div className="home-conatiner">
            <div className="title">
              <h1>Cross Site Scripting-Attack</h1>
              <p className='main-p'>Identify Attack By <span className='movementtext'> Cyber Ai</span></p>
            </div>
            <img src="/public/images/homeImg.png" alt="Loading.." />
          </div>
        </div>

        <div className="about-Attack">

          <h1>Attacks</h1>
          <div className="context-attack">
            <div className="attack-1">
              <h1>XSS-Attack</h1>
              <p>Cross-Site Scripting (XSS) is a type of security vulnerability commonly found in web applications. It allows attackers to inject malicious scripts into content that is then served to other users. When unsuspecting users load the infected page, the malicious script runs in their browser, potentially stealing sensitive information like cookies, session tokens, or login credentials. XSS attacks exploit the trust a user has in a website and can lead to account hijacking, data theft, or defacement of websites. Proper input validation and output encoding are key to preventing XSS vulnerabilities.</p>
            </div>

            <div className='diffline'></div>

            <div className="attack-2">
              <h1>Shell Scripting Attack</h1>
              <p>Shell scripting attacks involve the exploitation of command-line interpreters like Bash to execute unauthorized or malicious shell commands on a system. These attacks often occur through poorly sanitized inputs in web applications or scripts that pass user input directly into a shell. An attacker may inject commands to gain unauthorized access, manipulate files, exfiltrate data, or even take control of the system. A common example is Command Injection, where attackers exploit vulnerabilities in scripts to execute arbitrary commands.</p>
            </div>
          </div>

        </div>

        <div className='prevent-box'>
          <div className='prevent-content'>
            <h1>How We Prevent Attack's</h1>
            <ul>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, blanditiis?

              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, blanditiis?

              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, blanditiis?

              </li>
              <li>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, blanditiis?

              </li>
            </ul>
          </div>
        </div>


        <div className="user-card">

          <h1>Contributer's</h1>
    
          <div className="card-box">


            {/* Add Kr lena isme Dynamiclly contributers ke naaam ok  */}
            {
              HomeData.map((data, i) => {
                return (
                  <div className="card">
                    <img src={data.imgURL} alt="img_load" />
                    <div className="data-box">
                      <div className='abt-box'>Name : {data.Name}</div>
                      <div className='abt-box'>Roll Number : {data.Roll_Number}</div>
                      <div className='abt-box'>University : {data.University}</div>
                      <div className='abt-box'>Section : {data.Section}</div>
                    </div>
                  </div>
                )
              })
            }

          </div>

        </div>

      </main>
    </>
  )
}
