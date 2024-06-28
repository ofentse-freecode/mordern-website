import React from 'react'
import './contact.css'
import location from '../../assets/resources/location.png'
import phone from '../../assets/resources/phone.png'
import mail from '../../assets/resources/mail.png'

const Contact = () => {

    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7d2ed8f1-ded0-4aa4-ad50-990de3f00cf8");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message!</h3>
            <p>Feel free to reach out through the contact from. Our team is ready to assist you through any enquires you might have. </p>
            <ul>
                <li><img src={mail} alt='' className='imge'/>Contact us @Best.Venues</li>
                <li><img src={phone} alt='' className='imge'/>0123-456-789</li>
                <li><img src={location} alt='' className='imge'/>77 Massachusetts, Cambridge
                MA 0017, South Africa</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
           <label>Your name</label>
           <input type="text" name="name" placeholder="Enter your name" required/>

           <label>Phone number</label>
           <input type='tel' name='phone' placeholder='Enter your mobile number' required />

           <label>Write your message here</label>
           <textarea name='message' rows='6' placeholder='Enter your message' required></textarea>

           <button type='submit' className='btn dark-btn'>Submit now</button>
          </form>
          <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact