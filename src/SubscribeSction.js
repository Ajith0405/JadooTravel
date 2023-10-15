import React from 'react'
import './css/subscribeSction.css'
import group77 from './images/Group 77.png'
import group5 from './images/Group 5 (1).png'
function SubscribeSction() {
    return (
        <div className='container-fluid d-flex justify-content-center ' style={{ paddingBottom: '100px', width:'85vw' }}>

            <div className='container card  mb-2' style={{ border: 'none' }} >
                <div className='container telegram_logo w-100 text-end'>
                    <img className='' src={group77} alt='' width={'50px'} />
                </div>
                <div className='card_background' style={{ height: '300px', border: 'none' }}>
                    <div className='card_right_top'>
                        <div className='d-flex justify-content-between'>
                            <h4 className='text-center mx-auto h4' style={{ color: 'gray',marginTop:'65px',background:'transparent'}}>Subscribe to get information, latest news and other <br /> interesting offers about jadoo </h4>
                        </div>
                        <div className='card_left_corner' style={{ height: '170px', paddingTop: '40px'}}>
                            <div className=''>
                                <form className=''>
                                    <div className='d-flex justify-content-center'>
                                        <span className='form-lable d-flex align-items-center px-1 py-2' style={{ backgroundColor: '#ffff', borderRadius: '10px 0px 0px 10px' }}><i class="fa-regular fa-envelope fa-sm"></i></span>
                                        <input className='form-control py-3' style={{ outline: 'none', width: '30vw', border:'none', borderRadius: '0px 5px 5px 0px' }} type='text' placeholder='Your email' />
                                        <button className=' btn ms-3 px-4' style={{ background: '#DF7857', color: '#ffff', fontWeight: '500' }}>Subscribe</button>
                                    </div>
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-none d-md-block'>
                    <div className='plus_logo w-100 d-flex justify-content-end '>
                        <img src={group5} alt='' height={'130px'} />
                    </div>
                </div>
                

            </div>
        </div>
    )
}

export default SubscribeSction