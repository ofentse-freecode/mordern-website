import React from 'react';
import './specials.css'
import image_7 from '../../assets/resources/image-7.jpeg'
import image_8 from '../../assets/resources/image-8.jpeg'
import image_9 from '../../assets/resources/image-9.jpeg'
import image_10 from '../../assets/resources/image-10.jpg'

const Specials = () => {
  return (
    <div className='specials'>
        <div className="gallery">
            <img src={image_7} alt=''/>
            <img src={image_8} alt=''/>
            <img src={image_9} alt=''/>
            <img src={image_10} alt=''/>
        </div>
        <button className='btn'>See more here</button>
    </div>
  )
}

export default Specials