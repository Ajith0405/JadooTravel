import React from 'react'
import './css/partners.css'
import image27 from './images/image 27.png'
import image28 from './images/image 28.png'
import image29 from './images/image 29.png'
import image30 from './images/image 30.png'
import image31 from './images/image 31.png'

function Partners() {
  return (
    <div className='container w-75 my-2 '>
        <div className='container d-flex justify-content-between align-items-center'>
            <div className='options'>
                <img className='options_img'  src={image27} alt='axon'/>
            </div>
            <div className='options'>
                <img className='options_img' src={image28} alt='axon'/>
            </div>
            <div className='options'>
                <img className='options_img' src={image29} alt='axon'/>
            </div>
            <div className='options'>
                <img className='options_img' style={{padding:'30px 0px'}} src={image30} alt='axon'/>
            </div>
            <div className='options' >
                <img className='options_img' style={{padding:'30px 0px'}} src={image31} alt='axon'/>
            </div>
        </div>
    </div>
  )
}

export default Partners