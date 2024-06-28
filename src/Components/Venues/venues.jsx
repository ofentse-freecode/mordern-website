import React from 'react'
import './venues.css' 
import image from '../../assets/resources/images.jpeg'

import image_1 from '../../assets/resources/image-1.jpeg'

import image_2 from '../../assets/resources/image-2.png'

import sunny from '../../assets/resources/sunny.png'
import rainy from '../../assets/resources/rainy.png'



const venues = () => {
  return (
    <div className='venues' >
        <div className="venue">
            <img src={image} alt="" />
            <div className="caption">
                <img src={sunny} alt=""/>
                <p>Lake side</p>
            </div>
        </div>
        <div className="venue">
            <img src={image_1} alt="" />
            <div className="caption">
                <img src={rainy} alt=""/>
                <p>Indoor stage</p>
            </div>
        </div>
        <div className="venue">
            <img src={image_2} alt=""/>
            <div className="caption">
                <img src={sunny} alt=""/>
                <p>Courtyard</p>
            </div>
        </div>
        
    </div>
  )
}

export default venues