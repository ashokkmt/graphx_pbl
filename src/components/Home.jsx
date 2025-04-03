import React from 'react'
import '../styles/Home.css'


// &nbsp;
export default function Home() {
  return (
    <>
      <main>
        <h1>Cross Site Scripting-Attack</h1>
        <p className='main-p'>Identify Attack By <span className='movementtext'> Cyber Ai</span></p>


        <div className="grid-container">
          <div className="grid-item">
            <h2>Check XSS-Attack</h2>
            <p className="paraheight">Cross-Site Scripting (XSS) is a type of security vulnerability in web applications where attackers inject malicious scripts into webpages viewed by other users. This attack occurs when an application does not properly sanitize user input, allowing malicious JavaScript to execute in a victim’s browser. XSS can be used to steal sensitive data, such as cookies and session tokens, redirect users to malicious sites, or manipulate webpage content.</p>
            <button >Get Started</button>
          </div>
          <div className="grid-item">
            <h2>Check Fishing-Attack</h2>
            <p className="paraheight">Phishing attacks are cyber threats where attackers deceive individuals into providing sensitive information, such as passwords, credit card details, or personal data, by posing as legitimate entities. These attacks typically occur through fraudulent emails, messages, or fake websites that mimic trusted organizations. Victims unknowingly enter their credentials, allowing attackers to steal and misuse their information. To prevent phishing, users should verify email sources, avoid clicking on suspicious links, and enable multi-factor authentication for added security.</p>
            <button > Get Started</button>
          </div>
        </div>
      </main>
    </>
  )
}
