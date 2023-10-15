import React from 'react'
import './css/destinations.css'
import img1 from './images/Rectangle 14.png'
import img2 from './images/Rectangle 14 (1).png'
import img3 from './images/Rectangle 14 (2).png'
import navigation from './images/Navigation.png'

function Destinations() {
    return (
        <div className='container mt-5 mb-5 pb-5' style={{ width: '65%'}}>
            <div className='card d-flex justify-content-center' style={{width:'100%',border:'none' }}>
                <div className='mx-auto text-center'>
                    <h5>Top Selling</h5>
                    <h2 className='' style={{fontWeight:'900',fontFamily:'initial',fontSize:'40px'}}>Top Destinations</h2>
                </div>
                <div className='container decore_back mt-5 row ms-2'>
                    <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                        <div class="card card_item position-relative" style={{border:'none',borderRadius:'25px 25px 25px 25px' ,outline:'none' ,width:'90%',height:'350px',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 40px 24px'}}>
                            <img class="card-img-top" src={img2} alt=""  />
                                <div class="card-body pt-4 position-absolute w-100 " style={{top:'271px',backgroundColor:'#ffff',borderRadius:'0px 0px 20px 20px'}} >
                                    <div className=''>
                                        <div className='d-flex justify-content-between'>
                                        <h6 class="card-title" style={{color:'gray'}}>Rome,Italy</h6>
                                        <h6 class="card-text" style={{color:'gray'}}>$5.42k</h6>
                                        </div>
                                        <div className='d-flex '>
                                            <div>
                                            <img src={navigation} alt='' />
                                            </div>
                                            <p className='ms-2' style={{color:'gray'}}>10 Days Trip</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                    <div class="card card_item position-relative" style={{border:'none',borderRadius:'25px 25px 25px 25px' ,outline:'none' ,width:'90%',height:'350px',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 40px 24px'}}>
                            <img class="card-img-top" src={img1} alt=""/>
                                <div class="card-body pt-4 position-absolute w-100 " style={{top:'271px',backgroundColor:'#ffff',borderRadius:'0px 0px 20px 20px'}} >
                                    <div className=''>
                                        <div className='d-flex justify-content-between'>
                                        <h6 class="card-title" style={{color:'gray'}}>Lodon,UK</h6>
                                        <h6 class="card-text" style={{color:'gray'}}>$4.2k</h6>
                                        </div>
                                        <div className='d-flex '>
                                            <div>
                                            <img src={navigation} alt='' />
                                            </div>
                                            <p className='ms-2' style={{color:'gray'}}>12 Days Trip</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-4 col-md-4 col-sm-12'>
                    <div class="card card_item position-relative" style={{border:'none',borderRadius:'25px 25px 25px 25px' ,outline:'none' ,width:'90%',height:'350px',boxShadow: 'rgba(149, 157, 165, 0.2) 0px 40px 24px'}}>
                            <img class="card-img-top" src={img3} alt=""/>
                                <div class="card-body pt-4 position-absolute w-100 " style={{top:'271px',backgroundColor:'#ffff',borderRadius:'0px 0px 20px 20px'}} >
                                    <div className=''>
                                        <div className='d-flex justify-content-between'>
                                        <h6 class="card-title" style={{color:'gray'}}>Full Europe</h6>
                                        <h6 class="card-text" style={{color:'gray'}}>$15k</h6>
                                        </div>
                                        <div className='d-flex '>
                                            <div>
                                            <img src={navigation} alt='' />
                                            </div>
                                            <p className='ms-2' style={{color:'gray'}}>28 Days Trip</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Destinations