import React from 'react';
import goole from './images/google-play.png';
import apple from './images/apple (2) 1.png'
import './css/footer.css'

function Footer() {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-3 col-sm-3 col-md-3'>
                        <div className=''>
                            <div>
                                <h3 className=''>Jadoo.</h3>
                                <p className=''>Book your trip in minute, get full <br /> control for much longer.</p>
                            </div>

                        </div>

                    </div>
                    <div className='col-12 col-lg-2 col-sm-2 col-md-2 mx-auto'  >

                        <ul>
                            <h4>Company</h4>
                            <li>
                                <a href='#'>About</a>
                            </li>
                            <li>
                                <a href='#'>Careers</a>
                            </li>
                            <li>
                                <a href='#'>Mobile</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-2 col-sm-2 col-md-2 mx-auto' >

                        <ul>
                            <h4>Contact</h4>
                            <li>
                                <a href='#'>Help/FAQ</a>
                            </li>
                            <li>
                                <a href='#'>Press</a>
                            </li>
                            <li>
                                <a href='#'>Affilates</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-2 col-sm-2 col-md-2 mx-auto' >

                        <ul>
                            <h4>More</h4>
                            <li>
                                <a href='#'>Airlinefees</a>
                            </li>
                            <li>
                                <a href='#'>Airline</a>
                            </li>
                            <li>
                                <a href='#'>Low fare tips</a>
                            </li>
                        </ul>
                    </div>
                    <div className='col-12 col-lg-3 col-sm-2 col-md-3 mx-auto'>
                        <div className='mt-2 text-center'>
                            <i className="fa-brands fa-facebook-f me-2" style={{ padding: '15px', borderRadius: '50%', color: 'black', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}></i>
                            <i className="fa-brands fa-instagram me-2 fa-brands-active" style={{ padding: '15px', borderRadius: '50%', color: 'black', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }} ></i>
                            <i className="fa-brands fa-twitter" style={{ padding: '15px', borderRadius: '50%', color: 'black', boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}></i>
                        </div>
                        <div className='text-center'>
                            <h4 style={{ color: 'gray' }}>Discover Our App</h4>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='d-flex'>
                                <div className='d-flex align-items-center me-2' style={{ padding: '10px', borderRadius: '40px', backgroundColor: 'black' }}>
                                    <div className='me-2' >
                                        <img className='' src={goole} alt='Play store' />
                                    </div>
                                    <div>
                                        <p className='my-auto' style={{ fontSize: '8px' }}><span style={{ fontWeight: 'bold', color: '#ffff' }}>GET IT ON </span><br /><span style={{ color: 'gray' }}>GOOGLE PLAY</span></p>
                                    </div>


                                </div>
                                <div className='d-flex align-items-center' style={{ padding: '10px', borderRadius: '40px', backgroundColor: 'black'}}>
                                    <div className='me-2' >
                                        <img className='' src={apple} alt='Play store' />
                                    </div>
                                    <div>
                                        <p className='my-auto' style={{ fontSize: '8px',margin:'0px 5px' }}><span style={{ color: 'gray' }} >Available on the </span><br /><span style={{ fontWeight: 'bold', color: '#ffff' }}>Apple Store</span></p>
                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>

                </div>
                <div>
                    <h2 className='text-center' style={{ color: 'gray', fontSize: '25px' }}>All rights at @jadoo.co</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer