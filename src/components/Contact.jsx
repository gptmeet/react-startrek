import React from 'react'
import '../styles/Contact.scss'
const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact us</h1>
            <form >
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='enter your name'/>
                   
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='enter your email'/>
                   
                </div>

                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='enter your message'/>
                   
                </div>
                <button>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact