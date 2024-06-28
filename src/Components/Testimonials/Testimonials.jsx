import React, { useRef } from 'react';
import './testimonial.css';
import arrowforward from '../../assets/resources/arrowforward.png';
import arrowback from '../../assets/resources/arrowback.png';


const Testimonials = () => {
 
  const slider = useRef();
  let tx = 0;

  const slideForward =() =>{
   if(tx > -50){
      tx -= 25;
   }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward =() =>{
    if(tx < 0){
        tx += 25;}
         slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='testimonials container'>
      <div className='arrow'>
        <btn className="btns"><img src={arrowforward} alt="" className='back-btn' onClick={slideForward} /></btn>
        <btn className='btns'><img src={arrowback} alt="" className='next-btn' onClick={slideBackward} /></btn>
      
      </div>
      <div className='slider'>
        <ul ref={slider}>
          <li>
          <div className='card'>
            <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg" className='img'alt=""/>
            <h1>Susan Smith</h1>
            <p>necessitatibus commodi repudiandae alias nisi tempore? Consequatur, quasi repudiandae? Numquam officia molestias iure asperiores? Quidem saepe aut reprehenderit animi illo sint natus illum deserunt tempora dolores.</p>
             </div>
          </li>

          <li>
          <div className='card'>
            <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg" className='img' alt=""/>
            <h1>Anna Johnson</h1>
            <p>necessitatibus commodi repudiandae alias nisi tempore? Consequatur, quasi repudiandae? Numquam officia molestias iure asperiores? Quidem saepe aut reprehenderit animi illo sint natus illum deserunt tempora dolores.</p>
            </div>
          </li>
          
          <li>
          <div className="card">
            <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"  className='img' alt=""/>
            <h1>Peter Jones</h1>
            <p>necessitatibus commodi repudiandae alias nisi tempore? Consequatur, quasi repudiandae? Numquam officia molestias iure asperiores? Quidem saepe aut reprehenderit animi illo sint natus illum deserunt tempora dolores.</p>
            </div>
          </li>

          <li>
          <div className="card">
            <img src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg" className='img' alt=""/>
            <h1>Bill Anderson</h1>
            <p>necessitatibus commodi repudiandae alias nisi tempore? Consequatur, quasi repudiandae? Numquam officia molestias iure asperiores? Quidem saepe aut reprehenderit animi illo sint natus illum deserunt tempora dolores.</p>
        </div>
          </li>

          <li>
          <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVI8wwjmbk07RHjMaoxGcLQw5kRfAizckn7g&s" className='img' alt=""/>
          <h1>Hyde Park</h1>
          <p>necessitatibus commodi repudiandae alias nisi tempore? Consequatur, quasi repudiandae? Numquam officia molestias iure asperiores? Quidem saepe aut reprehenderit animi illo sint natus illum deserunt tempora dolores.</p>
        </div>
          </li>
        </ul>
    </div>

    </div>
  )
}

export default Testimonials

