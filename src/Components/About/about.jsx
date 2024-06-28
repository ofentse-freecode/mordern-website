import React from 'react'
import './about.css'
import image_4 from '../../assets/resources/banner.jpeg'
import play from '../../assets/resources/play.png'


const about = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={image_4} alt='' className='about-img' />
            <img src={play} alt='' className='play-icon' />
        </div>
        <div className="about-right">
            <h2>ABOUT US</h2>
            <h3>CELEBRATE WITH US</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum iste hic totam aliquam autem expedita eos, eveniet molestias rem optio!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae consequatur voluptatum molestias vel ut veritatis fugiat ipsam labore ea, omnis, amet rerum facere  exercitationem vero nesciunt ipsam atque nihil laboriosam eligendi consequuntur aliquid cupiditate aperiam explicabo!</p>
        </div>
    </div>
  )
}

export default about